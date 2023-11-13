$configFiles = Get-ChildItem "..\src\app\core\services\swagger-gen\service\api" -Filter *.service.ts
foreach ($file in $configFiles)
{
    (Get-Content $file.PSPath) |
    Foreach-Object { $_ -replace "useForm = false", "useForm = canConsumeForm" } |
    Set-Content $file.PSPath
}
