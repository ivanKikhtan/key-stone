var protectDocumentCommandId = 'protectDocument';
var unprotectDocumentCommandId = 'unprotectDocument';
function onCustomCommandExecuted(s, e) {
    switch (e.commandName) {
        case protectDocumentCommandId:
            if (!s.document.isProtected) {
                const password = window.prompt('enter new password(optional):', '');
                if (password != undefined && password != null)
                    s.document.protect(password);
            }
            updateCommandsState(s);
            break;
        case unprotectDocumentCommandId:
            const password = window.prompt('enter password:', '');
            if (password != undefined && password != null) {
                if (s.document.checkProtectionPassword(password))
                    s.document.unprotect();
                else
                    window.alert('The password incorrect!');
            }
            updateCommandsState(s);
            break;
        case 'user':
            s.authenticationOptions.userName = e.parameter;
            break;
        case 'highlightRanges':
            s.rangePermissionOptions.highlightRanges = e.parameter;
            break;
        case 'showBrackets':
            s.rangePermissionOptions.showBrackets = e.parameter;
            break;
        case 'highlightColor':
            s.rangePermissionOptions.highlightColor = e.parameter;
            break;
        case 'bracketsColor':
            s.rangePermissionOptions.bracketsColor = e.parameter;
            break;
    }
}
function onDocumentLoaded(s, e) {
    updateCommandsState(s);
}
function updateCommandsState(rich) {
    rich.setCommandEnabled(protectDocumentCommandId, !rich.document.isProtected);
    rich.setCommandEnabled(unprotectDocumentCommandId, rich.document.isProtected);
}
