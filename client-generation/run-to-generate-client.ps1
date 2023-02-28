try
{
	.\"run-codegen.ps1";
	.\"set-userform-to-canConsumeForm-value.ps1";
}
catch
{
    Write-Error $_.Exception.ToString()
    Read-Host -Prompt "The above error occurred. Press Enter to exit."
}
pause
