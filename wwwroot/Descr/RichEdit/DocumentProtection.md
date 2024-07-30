Our ASP.NET Rich Text Editor allows users to open and view protected documents. It also allows you to identify the current user, and enable a permitted range for a specified user or group.

In this demo, the **Review** ribbon tab contains custom commands that allow users to protect and unprotect the document (use the password "123"), switch between users to edit different text ranges, and customize or disable highlighting. The document includes permitted ranges for four users identified by user name: each user is authorized to edit a separate text region. The enabled range for the current user is highlighted.

Ribbon commands use the following APIs to execute appropriate actions:

- [protect](https://docs.devexpress.com/AspNetCore/js-DevExpress.RichEdit.RichEditDocumentBase#js_devexpress_richedit_richeditdocumentbase_protect_password_) and [unprotect](https://docs.devexpress.com/AspNetCore/js-DevExpress.RichEdit.RichEditDocumentBase#js_devexpress_richedit_richeditdocumentbase_unprotect) methods allow you to enable and disable document protection.
- The [authenticationOptions](https://docs.devexpress.com/AspNetCore/js-DevExpress.RichEdit.RichEdit#js_devexpress_richedit_richedit_authenticationoptions) property authenticates the current user by name or user group name.
- The [rangePermissionOptions](https://docs.devexpress.com/AspNetCore/js-DevExpress.RichEdit.RichEdit#js_devexpress_richedit_richedit_rangepermissionoptions) define visualization settings used to highlight permitted ranges.