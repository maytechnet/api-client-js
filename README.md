# quatrix_api

QuatrixApi - JavaScript client for quatrix_api
Download and upload files or folders, share them with predefined security options, manage your account and profile settings and a lot more functionalities can be easily integrated into your application using our Quatrix APIs. Learn more how to authenticate the Quatrix session, how to construct JSON formatted API calls and what responses to expect in our [API Guide](https://docs.maytech.net/display/MD/Quatrix+API).
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install quatrix_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your quatrix_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('quatrix_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var QuatrixApi = require('quatrix_api');

var defaultClient = QuatrixApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['X-Auth-Token'] = "Token"

var api = new QuatrixApi.APIKeyApi()

var body = new QuatrixApi.APIKeyCreateReq(); // {APIKeyCreateReq} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.apiKeyCreatePost(body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.quatrix.it/api/1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*QuatrixApi.APIKeyApi* | [**apiKeyCreatePost**](docs/APIKeyApi.md#apiKeyCreatePost) | **POST** /api-key/create | Create API Key
*QuatrixApi.APIKeyApi* | [**apiKeyDeleteIdGet**](docs/APIKeyApi.md#apiKeyDeleteIdGet) | **GET** /api-key/delete/{id} | Delete API key
*QuatrixApi.APIKeyApi* | [**apiKeyGet**](docs/APIKeyApi.md#apiKeyGet) | **GET** /api-key | Get all user&#39;s API keys
*QuatrixApi.APIKeyApi* | [**apiKeyIdGet**](docs/APIKeyApi.md#apiKeyIdGet) | **GET** /api-key/{id} | Get user&#39;s API keys
*QuatrixApi.APIKeyApi* | [**apiKeyMetadataIdGet**](docs/APIKeyApi.md#apiKeyMetadataIdGet) | **GET** /api-key/metadata/{id} | Get API key details
*QuatrixApi.APIKeyApi* | [**apiKeyUpdateIdPost**](docs/APIKeyApi.md#apiKeyUpdateIdPost) | **POST** /api-key/update/{id} | Update API key
*QuatrixApi.AccountApi* | [**accountInfoGet**](docs/AccountApi.md#accountInfoGet) | **GET** /account/info | Get account usage info
*QuatrixApi.AccountApi* | [**accountListGet**](docs/AccountApi.md#accountListGet) | **GET** /account/list | List user accounts
*QuatrixApi.AccountApi* | [**accountLogoGet**](docs/AccountApi.md#accountLogoGet) | **GET** /account/logo | Get account logo
*QuatrixApi.AccountApi* | [**accountMetadataGet**](docs/AccountApi.md#accountMetadataGet) | **GET** /account/metadata | Get account metadata
*QuatrixApi.AccountApi* | [**accountRolesGet**](docs/AccountApi.md#accountRolesGet) | **GET** /account/roles | Call users of the account
*QuatrixApi.ActivityLogApi* | [**trackingActivityGet**](docs/ActivityLogApi.md#trackingActivityGet) | **GET** /tracking/activity | Get activity log
*QuatrixApi.ActivityLogApi* | [**trackingCsvGet**](docs/ActivityLogApi.md#trackingCsvGet) | **GET** /tracking/csv | Download CSV file with activity log
*QuatrixApi.ActivityLogApi* | [**trackingDownloadsIdGet**](docs/ActivityLogApi.md#trackingDownloadsIdGet) | **GET** /tracking/downloads/{id} | Get shared file downloads
*QuatrixApi.ActivityLogApi* | [**trackingFilesIdGet**](docs/ActivityLogApi.md#trackingFilesIdGet) | **GET** /tracking/files/{id} | Get share action files
*QuatrixApi.AuthApi* | [**sessionKeepaliveGet**](docs/AuthApi.md#sessionKeepaliveGet) | **GET** /session/keepalive | Refresh session expiration time
*QuatrixApi.AuthApi* | [**sessionLoginGet**](docs/AuthApi.md#sessionLoginGet) | **GET** /session/login | Log in and get session ID details
*QuatrixApi.AuthApi* | [**sessionLoginPost**](docs/AuthApi.md#sessionLoginPost) | **POST** /session/login | Log in to the account using MFA
*QuatrixApi.AuthApi* | [**sessionLogoutGet**](docs/AuthApi.md#sessionLogoutGet) | **GET** /session/logout | Close the user&#39;s session
*QuatrixApi.AuthApi* | [**sessionUnblockCaptchaPost**](docs/AuthApi.md#sessionUnblockCaptchaPost) | **POST** /session/unblock-captcha | Unblock the session using CAPTCHA
*QuatrixApi.AutomationApi* | [**automationCreatePost**](docs/AutomationApi.md#automationCreatePost) | **POST** /automation/create | Create a new automation
*QuatrixApi.AutomationApi* | [**automationDeletePost**](docs/AutomationApi.md#automationDeletePost) | **POST** /automation/delete | Delete automations
*QuatrixApi.AutomationApi* | [**automationEditPost**](docs/AutomationApi.md#automationEditPost) | **POST** /automation/edit/ | Edit an existing automation
*QuatrixApi.AutomationApi* | [**automationGet**](docs/AutomationApi.md#automationGet) | **GET** /automation | List all automations
*QuatrixApi.AutomationApi* | [**automationMetadataIdGet**](docs/AutomationApi.md#automationMetadataIdGet) | **GET** /automation/metadata/{id} | Get automation metadata
*QuatrixApi.BillingApi* | [**billingUpgradePost**](docs/BillingApi.md#billingUpgradePost) | **POST** /billing/upgrade | Upgrade the user&#39;s account
*QuatrixApi.BrandingApi* | [**brandingGet**](docs/BrandingApi.md#brandingGet) | **GET** /branding | Get branding for account
*QuatrixApi.BrandingApi* | [**brandingPost**](docs/BrandingApi.md#brandingPost) | **POST** /branding | Create or update branding for account
*QuatrixApi.BrandingApi* | [**brandingPreviewPost**](docs/BrandingApi.md#brandingPreviewPost) | **POST** /branding/preview | Render html from markdown
*QuatrixApi.ContactApi* | [**contactCreatePost**](docs/ContactApi.md#contactCreatePost) | **POST** /contact/create | Create a new contact
*QuatrixApi.ContactApi* | [**contactDeletePost**](docs/ContactApi.md#contactDeletePost) | **POST** /contact/delete | Delete a contact
*QuatrixApi.ContactApi* | [**contactEditIdPost**](docs/ContactApi.md#contactEditIdPost) | **POST** /contact/edit/{id} | Edit contact metadata
*QuatrixApi.ContactApi* | [**contactGet**](docs/ContactApi.md#contactGet) | **GET** /contact | List user contacts
*QuatrixApi.ContactApi* | [**contactGroupGet**](docs/ContactApi.md#contactGroupGet) | **GET** /contact/group | List available contact groups.
*QuatrixApi.ContactApi* | [**contactMetadataIdGet**](docs/ContactApi.md#contactMetadataIdGet) | **GET** /contact/metadata/{id} | Get contact metadata
*QuatrixApi.ContactApi* | [**contactPgpKeyIdGet**](docs/ContactApi.md#contactPgpKeyIdGet) | **GET** /contact/pgp-key/{id} | Get contact&#39;s PGP key
*QuatrixApi.ContactApi* | [**contactUpgradeIdGet**](docs/ContactApi.md#contactUpgradeIdGet) | **GET** /contact/upgrade/{id} | Upgrade a contact
*QuatrixApi.FileApi* | [**fileAddTagIdPost**](docs/FileApi.md#fileAddTagIdPost) | **POST** /file/add-tag/{id} | Add a file tag
*QuatrixApi.FileApi* | [**fileCopyPost**](docs/FileApi.md#fileCopyPost) | **POST** /file/copy | Copy files
*QuatrixApi.FileApi* | [**fileCsvIdGet**](docs/FileApi.md#fileCsvIdGet) | **GET** /file/csv/{id} | Download CSV file with Folder Content
*QuatrixApi.FileApi* | [**fileDeletePost**](docs/FileApi.md#fileDeletePost) | **POST** /file/delete | Delete files
*QuatrixApi.FileApi* | [**fileDiffIdGet**](docs/FileApi.md#fileDiffIdGet) | **GET** /file/diff/{id} | Display changes of the file
*QuatrixApi.FileApi* | [**fileDownloadIdGet**](docs/FileApi.md#fileDownloadIdGet) | **GET** /file/download/{id} | Download file
*QuatrixApi.FileApi* | [**fileDownloadLinkPost**](docs/FileApi.md#fileDownloadLinkPost) | **POST** /file/download-link | Get download link
*QuatrixApi.FileApi* | [**fileEmptyTrashIdPost**](docs/FileApi.md#fileEmptyTrashIdPost) | **POST** /file/empty-trash/{id} | Empty trash
*QuatrixApi.FileApi* | [**fileInfoIdGet**](docs/FileApi.md#fileInfoIdGet) | **GET** /file/info/{id} | Get file info
*QuatrixApi.FileApi* | [**fileMakedirPost**](docs/FileApi.md#fileMakedirPost) | **POST** /file/makedir | Create a new folder
*QuatrixApi.FileApi* | [**fileMetadataGet**](docs/FileApi.md#fileMetadataGet) | **GET** /file/metadata | Get metadata of files
*QuatrixApi.FileApi* | [**fileMetadataIdGet**](docs/FileApi.md#fileMetadataIdGet) | **GET** /file/metadata/{id} | Get all file metadata
*QuatrixApi.FileApi* | [**fileMetadataPost**](docs/FileApi.md#fileMetadataPost) | **POST** /file/metadata | Modify file metadata
*QuatrixApi.FileApi* | [**fileModifyPost**](docs/FileApi.md#fileModifyPost) | **POST** /file/modify | Get file modification link
*QuatrixApi.FileApi* | [**fileMovePost**](docs/FileApi.md#fileMovePost) | **POST** /file/move | Move files
*QuatrixApi.FileApi* | [**filePreviewIdGet**](docs/FileApi.md#filePreviewIdGet) | **GET** /file/preview/{id} | Get a file preview
*QuatrixApi.FileApi* | [**fileRenameIdPost**](docs/FileApi.md#fileRenameIdPost) | **POST** /file/rename/{id} | Rename a file
*QuatrixApi.FileApi* | [**fileSearchPost**](docs/FileApi.md#fileSearchPost) | **POST** /file/search | Search files
*QuatrixApi.FileApi* | [**fileSizeIdGet**](docs/FileApi.md#fileSizeIdGet) | **GET** /file/size/{id} | Get file size
*QuatrixApi.FileApi* | [**fileTagsIdGet**](docs/FileApi.md#fileTagsIdGet) | **GET** /file/tags/{id} | Get a list of file tags
*QuatrixApi.GroupApi* | [**contactGroupGet**](docs/GroupApi.md#contactGroupGet) | **GET** /contact/group | List available contact groups.
*QuatrixApi.GroupApi* | [**groupGet**](docs/GroupApi.md#groupGet) | **GET** /group | List available user groups
*QuatrixApi.GroupApi* | [**groupMetadataIdGet**](docs/GroupApi.md#groupMetadataIdGet) | **GET** /group/metadata/{id} | Get group metadata
*QuatrixApi.GroupApi* | [**userGroupGet**](docs/GroupApi.md#userGroupGet) | **GET** /user/group | List all user groups
*QuatrixApi.InboxApi* | [**inboxGet**](docs/InboxApi.md#inboxGet) | **GET** /inbox | Get contact&#39;s share tracking
*QuatrixApi.LanguageApi* | [**languagesDefaultGet**](docs/LanguageApi.md#languagesDefaultGet) | **GET** /languages/default | Get default language
*QuatrixApi.LanguageApi* | [**languagesGet**](docs/LanguageApi.md#languagesGet) | **GET** /languages | List available languages
*QuatrixApi.MFAApi* | [**profileRemoveMfaPost**](docs/MFAApi.md#profileRemoveMfaPost) | **POST** /profile/remove-mfa | Disable MFA for the logged-in user
*QuatrixApi.MFAApi* | [**profileSetMfaPost**](docs/MFAApi.md#profileSetMfaPost) | **POST** /profile/set-mfa | Enable MFA for the logged-in user
*QuatrixApi.MFAApi* | [**sessionLoginPost**](docs/MFAApi.md#sessionLoginPost) | **POST** /session/login | Log in to the account using MFA
*QuatrixApi.MFAApi* | [**userRemoveMfaPost**](docs/MFAApi.md#userRemoveMfaPost) | **POST** /user/remove-mfa | Disable MFA for users
*QuatrixApi.MFAApi* | [**userResetMfaPost**](docs/MFAApi.md#userResetMfaPost) | **POST** /user/reset-mfa | Update existing MFA settings for users
*QuatrixApi.MFAApi* | [**userSetMfaPost**](docs/MFAApi.md#userSetMfaPost) | **POST** /user/set-mfa | Enable MFA for users
*QuatrixApi.PGPApi* | [**contactPgpKeyIdGet**](docs/PGPApi.md#contactPgpKeyIdGet) | **GET** /contact/pgp-key/{id} | Get contact&#39;s PGP key
*QuatrixApi.PGPApi* | [**keyRequestMetadataIdGet**](docs/PGPApi.md#keyRequestMetadataIdGet) | **GET** /key-request/metadata/{id} | Get PGP key request metadata
*QuatrixApi.PGPApi* | [**keyRequestRespondIdPost**](docs/PGPApi.md#keyRequestRespondIdPost) | **POST** /key-request/respond/{id} | Respond to PGP key request
*QuatrixApi.PGPApi* | [**pgpKeyCreatePost**](docs/PGPApi.md#pgpKeyCreatePost) | **POST** /pgp-key/create | Create PGP key
*QuatrixApi.PGPApi* | [**pgpKeyDeleteIdGet**](docs/PGPApi.md#pgpKeyDeleteIdGet) | **GET** /pgp-key/delete/{id} | Delete PGP key
*QuatrixApi.PGPApi* | [**pgpKeyEditIdPost**](docs/PGPApi.md#pgpKeyEditIdPost) | **POST** /pgp-key/edit/{id} | Edit PGP key
*QuatrixApi.PGPApi* | [**pgpKeyMetadataIdGet**](docs/PGPApi.md#pgpKeyMetadataIdGet) | **GET** /pgp-key/metadata/{id} | Get PGP key metadata
*QuatrixApi.PGPApi* | [**pgpKeyRecipientsPost**](docs/PGPApi.md#pgpKeyRecipientsPost) | **POST** /pgp-key/recipients | Get recipients&#39; PGP keys
*QuatrixApi.PGPApi* | [**pgpKeyRequestPost**](docs/PGPApi.md#pgpKeyRequestPost) | **POST** /pgp-key/request | Request PGP key
*QuatrixApi.PGPApi* | [**userPgpKeyIdGet**](docs/PGPApi.md#userPgpKeyIdGet) | **GET** /user/pgp-key/{id} | Get user&#39;s PGP key
*QuatrixApi.PasswordResetApi* | [**resetPasswordMetadataIdGet**](docs/PasswordResetApi.md#resetPasswordMetadataIdGet) | **GET** /reset-password/metadata/{id} | Get password reset request metadata
*QuatrixApi.PasswordResetApi* | [**resetPasswordRequestPost**](docs/PasswordResetApi.md#resetPasswordRequestPost) | **POST** /reset-password/request | Request password reset
*QuatrixApi.PasswordResetApi* | [**resetPasswordResetIdPost**](docs/PasswordResetApi.md#resetPasswordResetIdPost) | **POST** /reset-password/reset/{id} | Reset password
*QuatrixApi.PreviewApi* | [**filePreviewIdGet**](docs/PreviewApi.md#filePreviewIdGet) | **GET** /file/preview/{id} | Get a file preview
*QuatrixApi.PreviewApi* | [**previewIdGet**](docs/PreviewApi.md#previewIdGet) | **GET** /preview/{id} | Get binary preview data
*QuatrixApi.ProfileApi* | [**profile2faGenerateGet**](docs/ProfileApi.md#profile2faGenerateGet) | **GET** /profile/2fa/generate | Generate a new 2FA code
*QuatrixApi.ProfileApi* | [**profileGet**](docs/ProfileApi.md#profileGet) | **GET** /profile | Get profile metadata
*QuatrixApi.ProfileApi* | [**profileInfoGet**](docs/ProfileApi.md#profileInfoGet) | **GET** /profile/info | Retrieve additional profile info
*QuatrixApi.ProfileApi* | [**profileRemoveMfaPost**](docs/ProfileApi.md#profileRemoveMfaPost) | **POST** /profile/remove-mfa | Disable MFA for the logged-in user
*QuatrixApi.ProfileApi* | [**profileSetMfaPost**](docs/ProfileApi.md#profileSetMfaPost) | **POST** /profile/set-mfa | Enable MFA for the logged-in user
*QuatrixApi.ProfileApi* | [**profileSetPasswordPost**](docs/ProfileApi.md#profileSetPasswordPost) | **POST** /profile/set-password | Change profile password
*QuatrixApi.ProfileApi* | [**profileSetPost**](docs/ProfileApi.md#profileSetPost) | **POST** /profile/set | Update profile metadata
*QuatrixApi.ProjectFolderApi* | [**projectFolderAddUsersIdPost**](docs/ProjectFolderApi.md#projectFolderAddUsersIdPost) | **POST** /project-folder/add-users/{id} | Add users to the project folder
*QuatrixApi.ProjectFolderApi* | [**projectFolderCreatePost**](docs/ProjectFolderApi.md#projectFolderCreatePost) | **POST** /project-folder/create | Create a project folder
*QuatrixApi.ProjectFolderApi* | [**projectFolderDeleteIdGet**](docs/ProjectFolderApi.md#projectFolderDeleteIdGet) | **GET** /project-folder/delete/{id} | Convert a project folder to a folder
*QuatrixApi.ProjectFolderApi* | [**projectFolderDeleteUsersPost**](docs/ProjectFolderApi.md#projectFolderDeleteUsersPost) | **POST** /project-folder/delete-users/ | Remove project folder users
*QuatrixApi.ProjectFolderApi* | [**projectFolderEditUsersIdPost**](docs/ProjectFolderApi.md#projectFolderEditUsersIdPost) | **POST** /project-folder/edit-users/{id} | Update users’ permissions of the project folder
*QuatrixApi.ProjectFolderApi* | [**projectFolderGet**](docs/ProjectFolderApi.md#projectFolderGet) | **GET** /project-folder | List available project folders for a logged-in user
*QuatrixApi.ProjectFolderApi* | [**projectFolderMetadataIdGet**](docs/ProjectFolderApi.md#projectFolderMetadataIdGet) | **GET** /project-folder/metadata/{id} | Get project folder metadata
*QuatrixApi.ProjectFolderApi* | [**projectFolderProjectUsersPost**](docs/ProjectFolderApi.md#projectFolderProjectUsersPost) | **POST** /project-folder/project-users | List all project folders for given users
*QuatrixApi.ProjectFolderApi* | [**projectFolderSetUsersPost**](docs/ProjectFolderApi.md#projectFolderSetUsersPost) | **POST** /project-folder/set-users | Add users to project folders.
*QuatrixApi.ProjectFolderApi* | [**projectFolderUsersIdGet**](docs/ProjectFolderApi.md#projectFolderUsersIdGet) | **GET** /project-folder/users/{id} | List users of the project folder
*QuatrixApi.SSHKeyApi* | [**sshKeyCreatePost**](docs/SSHKeyApi.md#sshKeyCreatePost) | **POST** /ssh-key/create | Create a new SSH key
*QuatrixApi.SSHKeyApi* | [**sshKeyDeletePost**](docs/SSHKeyApi.md#sshKeyDeletePost) | **POST** /ssh-key/delete | Delete SSH key
*QuatrixApi.SSHKeyApi* | [**sshKeyEditPost**](docs/SSHKeyApi.md#sshKeyEditPost) | **POST** /ssh-key/edit | Edit SSH key metadata
*QuatrixApi.SSHKeyApi* | [**sshKeyGet**](docs/SSHKeyApi.md#sshKeyGet) | **GET** /ssh-key/ | List all available SSH keys
*QuatrixApi.SSHKeyApi* | [**sshKeyIdGet**](docs/SSHKeyApi.md#sshKeyIdGet) | **GET** /ssh-key/{id} | List available SSH keys by the given user ID.
*QuatrixApi.SSHKeyApi* | [**sshKeyMetadataIdGet**](docs/SSHKeyApi.md#sshKeyMetadataIdGet) | **GET** /ssh-key/metadata/{id} | Get SSH key metadata
*QuatrixApi.ServiceApi* | [**serviceGet**](docs/ServiceApi.md#serviceGet) | **GET** /service | List available services
*QuatrixApi.ServiceApi* | [**serviceMetadataIdGet**](docs/ServiceApi.md#serviceMetadataIdGet) | **GET** /service/metadata/{id} | Get service metadata
*QuatrixApi.ShareApi* | [**filesReturnMakedirIdPost**](docs/ShareApi.md#filesReturnMakedirIdPost) | **POST** /files-return/makedir/{id} | Create a directory for returned files
*QuatrixApi.ShareApi* | [**filesReturnMetadataIdGet**](docs/ShareApi.md#filesReturnMetadataIdGet) | **GET** /files-return/metadata/{id} | Get return files metadata
*QuatrixApi.ShareApi* | [**filesReturnSendPost**](docs/ShareApi.md#filesReturnSendPost) | **POST** /files-return/send | Return files in the created share
*QuatrixApi.ShareApi* | [**filesReturnUploadLinkIdPost**](docs/ShareApi.md#filesReturnUploadLinkIdPost) | **POST** /files-return/upload-link/{id} | Get return files upload link
*QuatrixApi.ShareApi* | [**quicklinkCreatePost**](docs/ShareApi.md#quicklinkCreatePost) | **POST** /quicklink/create | Create a quicklink
*QuatrixApi.ShareApi* | [**quicklinkLoginPinPost**](docs/ShareApi.md#quicklinkLoginPinPost) | **POST** /quicklink/login-pin | Log in with PIN to access a quicklink
*QuatrixApi.ShareApi* | [**quicklinkRevokeIdGet**](docs/ShareApi.md#quicklinkRevokeIdGet) | **GET** /quicklink/revoke/{id} | Revoke a quicklink
*QuatrixApi.ShareApi* | [**shareCreatePost**](docs/ShareApi.md#shareCreatePost) | **POST** /share/create | Create a file share
*QuatrixApi.ShareApi* | [**shareDownloadIdGet**](docs/ShareApi.md#shareDownloadIdGet) | **GET** /share/download/{id} | Download share files
*QuatrixApi.ShareApi* | [**shareDownloadInfoIdGet**](docs/ShareApi.md#shareDownloadInfoIdGet) | **GET** /share/download-info/{id} | Get share download info
*QuatrixApi.ShareApi* | [**shareDownloadLinkIdGet**](docs/ShareApi.md#shareDownloadLinkIdGet) | **GET** /share/download-link/{id} | Get download link for all files
*QuatrixApi.ShareApi* | [**shareDownloadLinkIdPost**](docs/ShareApi.md#shareDownloadLinkIdPost) | **POST** /share/download-link/{id} | Get download link for specified files
*QuatrixApi.ShareApi* | [**shareFilesIdGet**](docs/ShareApi.md#shareFilesIdGet) | **GET** /share/files/{id} | List shared files
*QuatrixApi.ShareApi* | [**shareLoginPinPost**](docs/ShareApi.md#shareLoginPinPost) | **POST** /share/login-pin | Log in with PIN to access a share
*QuatrixApi.ShareApi* | [**sharePreviewIdGet**](docs/ShareApi.md#sharePreviewIdGet) | **GET** /share/preview/{id} | Preview a shared file
*QuatrixApi.ShareApi* | [**shareRecipientsGet**](docs/ShareApi.md#shareRecipientsGet) | **GET** /share/recipients | List all contacts for the share
*QuatrixApi.ShareApi* | [**shareRequestPost**](docs/ShareApi.md#shareRequestPost) | **POST** /share/request | Send a request to share files
*QuatrixApi.ShareApi* | [**shareRevokeIdGet**](docs/ShareApi.md#shareRevokeIdGet) | **GET** /share/revoke/{id} | Revoke a share
*QuatrixApi.ShareApi* | [**shareSendRequestIdPost**](docs/ShareApi.md#shareSendRequestIdPost) | **POST** /share/send-request/{id} | Request files. Use /share/request API call instead.
*QuatrixApi.ShareApi* | [**trackingGet**](docs/ShareApi.md#trackingGet) | **GET** /tracking/ | List share actions metadata for all users
*QuatrixApi.ShareApi* | [**trackingIdGet**](docs/ShareApi.md#trackingIdGet) | **GET** /tracking/{id} | List share actions metadata for a user
*QuatrixApi.SiteSettingsApi* | [**settingsAuthMethodsGet**](docs/SiteSettingsApi.md#settingsAuthMethodsGet) | **GET** /settings/auth-methods | Get available authentication methods
*QuatrixApi.SiteSettingsApi* | [**settingsGet**](docs/SiteSettingsApi.md#settingsGet) | **GET** /settings | Get site settings
*QuatrixApi.SiteSettingsApi* | [**settingsSetPost**](docs/SiteSettingsApi.md#settingsSetPost) | **POST** /settings/set | Set site settings
*QuatrixApi.SiteSettingsApi* | [**settingsUploadLogoLinkGet**](docs/SiteSettingsApi.md#settingsUploadLogoLinkGet) | **GET** /settings/upload-logo-link | Get a new logo upload link
*QuatrixApi.UploadApi* | [**fileModifyPost**](docs/UploadApi.md#fileModifyPost) | **POST** /file/modify | Get file modification link
*QuatrixApi.UploadApi* | [**settingsUploadLogoLinkGet**](docs/UploadApi.md#settingsUploadLogoLinkGet) | **GET** /settings/upload-logo-link | Get a new logo upload link
*QuatrixApi.UploadApi* | [**uploadFinalizeIdGet**](docs/UploadApi.md#uploadFinalizeIdGet) | **GET** /upload/finalize/{id} | Finalize chunked file upload
*QuatrixApi.UploadApi* | [**uploadLinkPost**](docs/UploadApi.md#uploadLinkPost) | **POST** /upload/link | Get file upload link
*QuatrixApi.UserApi* | [**userCreatePost**](docs/UserApi.md#userCreatePost) | **POST** /user/create | Create a user
*QuatrixApi.UserApi* | [**userDeletePost**](docs/UserApi.md#userDeletePost) | **POST** /user/delete | Delete users
*QuatrixApi.UserApi* | [**userEditPost**](docs/UserApi.md#userEditPost) | **POST** /user/edit | Update metadata of users
*QuatrixApi.UserApi* | [**userGet**](docs/UserApi.md#userGet) | **GET** /user | List users
*QuatrixApi.UserApi* | [**userGroupGet**](docs/UserApi.md#userGroupGet) | **GET** /user/group | List all user groups
*QuatrixApi.UserApi* | [**userMetadataIdGet**](docs/UserApi.md#userMetadataIdGet) | **GET** /user/metadata/{id} | Get user metadata
*QuatrixApi.UserApi* | [**userPgpKeyIdGet**](docs/UserApi.md#userPgpKeyIdGet) | **GET** /user/pgp-key/{id} | Get user&#39;s PGP key
*QuatrixApi.UserApi* | [**userRemoveMfaPost**](docs/UserApi.md#userRemoveMfaPost) | **POST** /user/remove-mfa | Disable MFA for users
*QuatrixApi.UserApi* | [**userResetMfaPost**](docs/UserApi.md#userResetMfaPost) | **POST** /user/reset-mfa | Update existing MFA settings for users
*QuatrixApi.UserApi* | [**userSetMfaPost**](docs/UserApi.md#userSetMfaPost) | **POST** /user/set-mfa | Enable MFA for users
*QuatrixApi.UserApi* | [**userSignupPost**](docs/UserApi.md#userSignupPost) | **POST** /user/signup | Register a new user
*QuatrixApi.WidgetApi* | [**widgetFinalizeUploadIdGet**](docs/WidgetApi.md#widgetFinalizeUploadIdGet) | **GET** /widget/finalize-upload/{id} | Finalize chunked upload of the widget
*QuatrixApi.WidgetApi* | [**widgetMakedirIdPost**](docs/WidgetApi.md#widgetMakedirIdPost) | **POST** /widget/makedir/{id} | Create a subfolder in the widget folder
*QuatrixApi.WidgetApi* | [**widgetMetadataIdGet**](docs/WidgetApi.md#widgetMetadataIdGet) | **GET** /widget/metadata/{id} | Get all widget metadata
*QuatrixApi.WidgetApi* | [**widgetUnblockCaptchaIdPost**](docs/WidgetApi.md#widgetUnblockCaptchaIdPost) | **POST** /widget/unblock-captcha/{id} | Unblock the widget CAPTCHA
*QuatrixApi.WidgetApi* | [**widgetUploadLinkIdPost**](docs/WidgetApi.md#widgetUploadLinkIdPost) | **POST** /widget/upload-link/{id} | Get widget upload link


## Documentation for Models

 - [QuatrixApi.APIKeyCreateReq](docs/APIKeyCreateReq.md)
 - [QuatrixApi.APIKeyResp](docs/APIKeyResp.md)
 - [QuatrixApi.APIKeyUpdateReq](docs/APIKeyUpdateReq.md)
 - [QuatrixApi.AccountBranding](docs/AccountBranding.md)
 - [QuatrixApi.AccountBrandingPreview](docs/AccountBrandingPreview.md)
 - [QuatrixApi.AccountBrandingReq](docs/AccountBrandingReq.md)
 - [QuatrixApi.AccountInfoResp](docs/AccountInfoResp.md)
 - [QuatrixApi.AccountListRespItems](docs/AccountListRespItems.md)
 - [QuatrixApi.AccountMetadataResp](docs/AccountMetadataResp.md)
 - [QuatrixApi.AccountRolesRespItems](docs/AccountRolesRespItems.md)
 - [QuatrixApi.AutomationCreateReq](docs/AutomationCreateReq.md)
 - [QuatrixApi.AutomationDeleteResp](docs/AutomationDeleteResp.md)
 - [QuatrixApi.AutomationEditReq](docs/AutomationEditReq.md)
 - [QuatrixApi.AutomationOptions](docs/AutomationOptions.md)
 - [QuatrixApi.AutomationResp](docs/AutomationResp.md)
 - [QuatrixApi.BillingUpgradeReq](docs/BillingUpgradeReq.md)
 - [QuatrixApi.BillingUpgradeResp](docs/BillingUpgradeResp.md)
 - [QuatrixApi.ContactCreateReq](docs/ContactCreateReq.md)
 - [QuatrixApi.ContactDeleteRespItems](docs/ContactDeleteRespItems.md)
 - [QuatrixApi.ContactEditResp](docs/ContactEditResp.md)
 - [QuatrixApi.ContactGroupRespItems](docs/ContactGroupRespItems.md)
 - [QuatrixApi.ContactResp](docs/ContactResp.md)
 - [QuatrixApi.CopyMoveFilesReq](docs/CopyMoveFilesReq.md)
 - [QuatrixApi.EmptyTrashRespItems](docs/EmptyTrashRespItems.md)
 - [QuatrixApi.ErrorModel](docs/ErrorModel.md)
 - [QuatrixApi.FileAddTagReq](docs/FileAddTagReq.md)
 - [QuatrixApi.FileCsvResp](docs/FileCsvResp.md)
 - [QuatrixApi.FileDiffResp](docs/FileDiffResp.md)
 - [QuatrixApi.FileDiffRespData](docs/FileDiffRespData.md)
 - [QuatrixApi.FileInfoResp](docs/FileInfoResp.md)
 - [QuatrixApi.FileMetadataGetResp](docs/FileMetadataGetResp.md)
 - [QuatrixApi.FileMetadataPostReq](docs/FileMetadataPostReq.md)
 - [QuatrixApi.FileMetadataPostResp](docs/FileMetadataPostResp.md)
 - [QuatrixApi.FileModifyReq](docs/FileModifyReq.md)
 - [QuatrixApi.FileModifyResp](docs/FileModifyResp.md)
 - [QuatrixApi.FilePreviewResp](docs/FilePreviewResp.md)
 - [QuatrixApi.FileRenameReq](docs/FileRenameReq.md)
 - [QuatrixApi.FileRenameResp](docs/FileRenameResp.md)
 - [QuatrixApi.FileResp](docs/FileResp.md)
 - [QuatrixApi.FileSizeResp](docs/FileSizeResp.md)
 - [QuatrixApi.FileTagResp](docs/FileTagResp.md)
 - [QuatrixApi.FilesReturnMakedirReq](docs/FilesReturnMakedirReq.md)
 - [QuatrixApi.FilesReturnMakedirResps](docs/FilesReturnMakedirResps.md)
 - [QuatrixApi.FilesReturnMetadataResp](docs/FilesReturnMetadataResp.md)
 - [QuatrixApi.FilesReturnSendReq](docs/FilesReturnSendReq.md)
 - [QuatrixApi.FilesReturnSendResp](docs/FilesReturnSendResp.md)
 - [QuatrixApi.FilesReturnUploadLinkReq](docs/FilesReturnUploadLinkReq.md)
 - [QuatrixApi.FilesReturnUploadLinkResp](docs/FilesReturnUploadLinkResp.md)
 - [QuatrixApi.Group](docs/Group.md)
 - [QuatrixApi.GroupMetadata](docs/GroupMetadata.md)
 - [QuatrixApi.GroupResp](docs/GroupResp.md)
 - [QuatrixApi.IdName](docs/IdName.md)
 - [QuatrixApi.IdResp](docs/IdResp.md)
 - [QuatrixApi.IdsReq](docs/IdsReq.md)
 - [QuatrixApi.IdsResp](docs/IdsResp.md)
 - [QuatrixApi.InboxRespItems](docs/InboxRespItems.md)
 - [QuatrixApi.JobResp](docs/JobResp.md)
 - [QuatrixApi.KeyRequestMetadataResp](docs/KeyRequestMetadataResp.md)
 - [QuatrixApi.KeyRequestRespondReq](docs/KeyRequestRespondReq.md)
 - [QuatrixApi.LanguagesDefaultResp](docs/LanguagesDefaultResp.md)
 - [QuatrixApi.LanguagesRespItems](docs/LanguagesRespItems.md)
 - [QuatrixApi.MakeDirReq](docs/MakeDirReq.md)
 - [QuatrixApi.PfCreateResp](docs/PfCreateResp.md)
 - [QuatrixApi.PfDeleteUsersRespItems](docs/PfDeleteUsersRespItems.md)
 - [QuatrixApi.PfMetadataResp](docs/PfMetadataResp.md)
 - [QuatrixApi.PfSetUsersReq](docs/PfSetUsersReq.md)
 - [QuatrixApi.PfSetUsersRespItems](docs/PfSetUsersRespItems.md)
 - [QuatrixApi.PfUsersListReq](docs/PfUsersListReq.md)
 - [QuatrixApi.PfUsersListRespItems](docs/PfUsersListRespItems.md)
 - [QuatrixApi.PfaddUsersReq](docs/PfaddUsersReq.md)
 - [QuatrixApi.PfcreateReq](docs/PfcreateReq.md)
 - [QuatrixApi.PfdeleteUsersReq](docs/PfdeleteUsersReq.md)
 - [QuatrixApi.PfeditUsersReq](docs/PfeditUsersReq.md)
 - [QuatrixApi.PgpCreateReq](docs/PgpCreateReq.md)
 - [QuatrixApi.PgpEditReq](docs/PgpEditReq.md)
 - [QuatrixApi.PgpKeyRecipientsRespItems](docs/PgpKeyRecipientsRespItems.md)
 - [QuatrixApi.PgpKeyResp](docs/PgpKeyResp.md)
 - [QuatrixApi.ProfileInfoResp](docs/ProfileInfoResp.md)
 - [QuatrixApi.ProfileRemoveMfaReq](docs/ProfileRemoveMfaReq.md)
 - [QuatrixApi.ProfileRemoveMfaResp](docs/ProfileRemoveMfaResp.md)
 - [QuatrixApi.ProfileResp](docs/ProfileResp.md)
 - [QuatrixApi.ProfileRespShareTypes](docs/ProfileRespShareTypes.md)
 - [QuatrixApi.ProfileSetMfaReq](docs/ProfileSetMfaReq.md)
 - [QuatrixApi.ProfileSetMfaResp](docs/ProfileSetMfaResp.md)
 - [QuatrixApi.ProfileSetPasswordReq](docs/ProfileSetPasswordReq.md)
 - [QuatrixApi.ProfileSetPasswordResp](docs/ProfileSetPasswordResp.md)
 - [QuatrixApi.ProfileSetReq](docs/ProfileSetReq.md)
 - [QuatrixApi.ProfileSetResp](docs/ProfileSetResp.md)
 - [QuatrixApi.ProjectFoldersListRespItem](docs/ProjectFoldersListRespItem.md)
 - [QuatrixApi.ProjectOwner](docs/ProjectOwner.md)
 - [QuatrixApi.ProjectfolderdeleteusersUsers](docs/ProjectfolderdeleteusersUsers.md)
 - [QuatrixApi.ProjectfoldersetusersParams](docs/ProjectfoldersetusersParams.md)
 - [QuatrixApi.ProjectfoldersetusersUsers](docs/ProjectfoldersetusersUsers.md)
 - [QuatrixApi.QuicklinkCreateReq](docs/QuicklinkCreateReq.md)
 - [QuatrixApi.QuicklinkCreateResp](docs/QuicklinkCreateResp.md)
 - [QuatrixApi.QuicklinkLoginPinReq](docs/QuicklinkLoginPinReq.md)
 - [QuatrixApi.ResetPasswordMetadataResp](docs/ResetPasswordMetadataResp.md)
 - [QuatrixApi.ResetPasswordRequestReq](docs/ResetPasswordRequestReq.md)
 - [QuatrixApi.ResetPasswordRequestResp](docs/ResetPasswordRequestResp.md)
 - [QuatrixApi.ResetPasswordResetReq](docs/ResetPasswordResetReq.md)
 - [QuatrixApi.SearchQuery](docs/SearchQuery.md)
 - [QuatrixApi.SearchReq](docs/SearchReq.md)
 - [QuatrixApi.SearchTag](docs/SearchTag.md)
 - [QuatrixApi.ServiceResp](docs/ServiceResp.md)
 - [QuatrixApi.ServiceRespUsers](docs/ServiceRespUsers.md)
 - [QuatrixApi.SessionLoginPostResp](docs/SessionLoginPostResp.md)
 - [QuatrixApi.SessionLoginResp](docs/SessionLoginResp.md)
 - [QuatrixApi.SessionUnblockCaptchaResp](docs/SessionUnblockCaptchaResp.md)
 - [QuatrixApi.SettingsAuthMethodsRespItems](docs/SettingsAuthMethodsRespItems.md)
 - [QuatrixApi.SettingsResp](docs/SettingsResp.md)
 - [QuatrixApi.SettingsSetReq](docs/SettingsSetReq.md)
 - [QuatrixApi.SettingsUploadLogoLinkResp](docs/SettingsUploadLogoLinkResp.md)
 - [QuatrixApi.SettingssetShareTypes](docs/SettingssetShareTypes.md)
 - [QuatrixApi.ShareCreateReq](docs/ShareCreateReq.md)
 - [QuatrixApi.ShareCreateResp](docs/ShareCreateResp.md)
 - [QuatrixApi.ShareDownloadInfoResp](docs/ShareDownloadInfoResp.md)
 - [QuatrixApi.ShareDownloadLinkReq](docs/ShareDownloadLinkReq.md)
 - [QuatrixApi.ShareFilesRespItems](docs/ShareFilesRespItems.md)
 - [QuatrixApi.ShareLoginPinReq](docs/ShareLoginPinReq.md)
 - [QuatrixApi.ShareRecipientsResp](docs/ShareRecipientsResp.md)
 - [QuatrixApi.ShareRequestReq](docs/ShareRequestReq.md)
 - [QuatrixApi.ShareRequestResp](docs/ShareRequestResp.md)
 - [QuatrixApi.ShareSendRequestReq](docs/ShareSendRequestReq.md)
 - [QuatrixApi.ShortUserService](docs/ShortUserService.md)
 - [QuatrixApi.SshKeyCreateReq](docs/SshKeyCreateReq.md)
 - [QuatrixApi.SshKeyDeleteReq](docs/SshKeyDeleteReq.md)
 - [QuatrixApi.SshKeyEditReq](docs/SshKeyEditReq.md)
 - [QuatrixApi.SshKeyResp](docs/SshKeyResp.md)
 - [QuatrixApi.StringSearchQueryElement](docs/StringSearchQueryElement.md)
 - [QuatrixApi.TagSearchQueryElement](docs/TagSearchQueryElement.md)
 - [QuatrixApi.TimestampSearchQueryElement](docs/TimestampSearchQueryElement.md)
 - [QuatrixApi.TrackingActivityRespItems](docs/TrackingActivityRespItems.md)
 - [QuatrixApi.TrackingCSVRespItems](docs/TrackingCSVRespItems.md)
 - [QuatrixApi.TrackingDownloadsRespItems](docs/TrackingDownloadsRespItems.md)
 - [QuatrixApi.TrackingFilesRespItems](docs/TrackingFilesRespItems.md)
 - [QuatrixApi.TrackingIdRespItems](docs/TrackingIdRespItems.md)
 - [QuatrixApi.TrackingRespItems](docs/TrackingRespItems.md)
 - [QuatrixApi.UnblockCaptchaReq](docs/UnblockCaptchaReq.md)
 - [QuatrixApi.UploadFinalizeResp](docs/UploadFinalizeResp.md)
 - [QuatrixApi.UploadLinkReq](docs/UploadLinkReq.md)
 - [QuatrixApi.UserCreateReq](docs/UserCreateReq.md)
 - [QuatrixApi.UserDeleteReq](docs/UserDeleteReq.md)
 - [QuatrixApi.UserEditReq](docs/UserEditReq.md)
 - [QuatrixApi.UserPermissionReq](docs/UserPermissionReq.md)
 - [QuatrixApi.UserPermissionResp](docs/UserPermissionResp.md)
 - [QuatrixApi.UserRemoveMfaReq](docs/UserRemoveMfaReq.md)
 - [QuatrixApi.UserResetMfaReq](docs/UserResetMfaReq.md)
 - [QuatrixApi.UserResp](docs/UserResp.md)
 - [QuatrixApi.UserSetMfaReq](docs/UserSetMfaReq.md)
 - [QuatrixApi.UserSignupReq](docs/UserSignupReq.md)
 - [QuatrixApi.WidgetFinalizeUploadResp](docs/WidgetFinalizeUploadResp.md)
 - [QuatrixApi.WidgetMakedirReq](docs/WidgetMakedirReq.md)
 - [QuatrixApi.WidgetMakedirResp](docs/WidgetMakedirResp.md)
 - [QuatrixApi.WidgetMakedirResp1](docs/WidgetMakedirResp1.md)
 - [QuatrixApi.WidgetMetadataResp](docs/WidgetMetadataResp.md)
 - [QuatrixApi.WidgetUploadLinkReq](docs/WidgetUploadLinkReq.md)
 - [QuatrixApi.WindgetUnblockCaptchaReq](docs/WindgetUnblockCaptchaReq.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: X-Auth-Token
- **Location**: HTTP header

### basicAuth

- **Type**: HTTP basic authentication

