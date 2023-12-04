import { Component, OnInit } from '@angular/core';
import {TimeSlotsGeneratorService} from "../core/services/time-slots-generator.service";
import { FormBuilder, Validators } from '@angular/forms';
import { EntityDetailsBaseComponent } from '../core/components/abstraction/entity-detail-base.component';
import { OfficeService } from '../core/services/swagger-gen/office';
import { SpecializationService } from '../core/services/swagger-gen/specialization';
import { ServiceService } from '../core/services/swagger-gen/service';
import { DoctorService, PatientService, ReceptionistService } from '../core/services/swagger-gen/profile';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { AppointmentService } from '../core/services/swagger-gen/appointment';


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent extends EntityDetailsBaseComponent implements OnInit  {

  timeSlots: Array<string> = [];
  isLinear = true;
  offices;
  specializations;
  services;
  doctors;
  patient;
  patientId;
  isConfirm: boolean = false;
  constructor(private timeSlotsGeneratorService: TimeSlotsGeneratorService,
              private _formBuilder: FormBuilder,
              private readonly officeService:OfficeService,
              private readonly specializationService : SpecializationService ,
              private readonly serviceService : ServiceService,
              private readonly doctorService:DoctorService,
              private readonly patientService:PatientService,
              private readonly receptionistService:ReceptionistService,
              private readonly appointmentService:AppointmentService){
    super();
    this.timeSlots = this.timeSlotsGeneratorService.generateTimeSlots('08:00', '18:00', 30);
    this.detailsForm = this._formBuilder.group({
      firstFormGroup: this._formBuilder.group({
        officeId: ['', Validators.required],
      }),
      secondFormGroup: this._formBuilder.group({
        specializationId: ['', Validators.required],
        serviceId: ['', Validators.required],
      }),
      thirdFormGroup: this._formBuilder.group({
        doctorId: ['', Validators.required],
      }),
      fourthFormGroup: this._formBuilder.group({
        date: ['', Validators.required],
        time: ['', Validators.required],
      }),
      fifthFormGroup: this._formBuilder.group({
        patientId: ['', Validators.required],
      }),
    });

this.getOffices();
this.getSpecialization();
    this.getPatient();
  }
  ngOnInit(): void {

  }
  public getOffices(){
    this.officeService.getAllOffices().subscribe(x=>this.offices=x.filter(y=>y.isActive));
  }

  public getSpecialization(){
    this.specializationService.getAllSpecialization().subscribe(x=>this.specializations=x.filter(y=>y.isActive));
  }
  public getServices(specializationId:number){
    this.serviceService.getAllServicesBySpecializationId(specializationId).subscribe(x=>this.services=x.filter(y=>y.isActive))
  }
  public getDoctors(specializationId:number){
    this.doctorService.getDoctorsBySpecializationId(specializationId).subscribe(x=>this.doctors = x)
  }
  public getPatient(){
    this.patientId = localStorage.getItem('id');
    const roles = localStorage.getItem('role');
    if (roles) {
      const rolesArray = roles.split(',');
      if(rolesArray.includes('Patient')){
        this.patientService.getPatientById(+this.patientId).subscribe(x=>this.patient=x)
      }
      if(rolesArray.includes('Receptionist')){
        this.receptionistService.getReceptionistById(+this.patientId).subscribe(x=>this.patient=x)
      }
      if(rolesArray.includes('Doctor')){
        this.doctorService.getDoctorById(+this.patientId).subscribe(x=>this.patient=x)
      }
    }



  }
  protected saveInternal() {
    const formData = this.detailsForm.value;


    const dateString = formData.fourthFormGroup.date;
    const timeString = formData.fourthFormGroup.time;
    let dateObject = new Date(dateString);

    const [hours, minutes] = timeString.split(':');
    dateObject = new Date(dateObject.setHours(Number(hours), Number(minutes)));
console.log(dateObject)
    this.appointmentService.createAppointmentForm(formData.thirdFormGroup.doctorId,
  +formData.fifthFormGroup.patientId,
  formData.secondFormGroup.serviceId,
  formData.secondFormGroup.specializationId,
  formData.firstFormGroup.officeId, dateObject).subscribe(x=>console.log(x))
// Вывод данных в консоль для примера
    console.log(formData);
  }

  onSpecializationChange($event: any) {
    this.getServices($event as number);
    this.getDoctors($event as number);
  }

  confirmPerson() {
    this.detailsForm.get('fifthFormGroup.patientId').setValue(this.patientId);
    this.isConfirm= true;
  }
}
