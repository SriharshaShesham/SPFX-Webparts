# **Build package**

### gulp build
### gulp bundle --ship
### gulp package-solution --ship




# **Deploy and Install**

### After packaging the SPFx app, connect your SharePoint tenant using the PSScript.

### Connect-PnPOnline -Url https://sheshams.sharepoint.com/sites/SPFX -UseWebLogin

### Add-PnPApp -Path .\sharepoint\solution\list-tiles.sppkg -Scope Site -Publish -Overwrite

### Publish-PnPApp -Identity bc12c4a4-fd30-471c-9f69-433861b025d0 -Scope Site


### Install-PnPApp -Identity 2b5a0b4d-de73-485c-9fd2-ada64da1da0e -Scope Site





# **Uninstall & Remove**

### Uninstall-PnPApp -Identity f403f74c-24f5-4857-a3b7-f845c8882343 -Scope Site

### Remove-PnPApp -Identity f403f74c-24f5-4857-a3b7-f845c8882343 -Scope Site