﻿var customizedOnEventItemId = 'customizedOnEventId';
var googleSearchId = 'googleSearchId';
// icons: https://js.devexpress.com/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library

function onInit(s) {
    s.contextMenu.insertItem(new DevExpress.RichEdit.ContextMenuItem(customizedOnEventItemId, {
        icon: 'coffee', beginGroup: true, text: 'Customized on event', visible: false, disabled: true
    }), 0);
    s.contextMenu.insertItem(new DevExpress.RichEdit.ContextMenuItem(googleSearchId, {
        icon: 'search', beginGroup: true, text: 'Google Search...'
    }), 1);

    s.contextMenu.removeItem(DevExpress.RichEdit.ContextMenuCommandId.DecreaseParagraphIndent);
    s.contextMenu.removeItem(DevExpress.RichEdit.ContextMenuCommandId.IncreaseParagraphIndent);

    s.contextMenu.insertItem(new DevExpress.RichEdit.ContextMenuItem(DevExpress.RichEdit.MailMergeTabCommandId.CreateDateField, {
        icon: 'clock', text: 'Insert Date Field'
    }), 1);
}

function onContextMenuShowing(s, e) {
    var characterProperties = s.selection.activeSubDocument.getCharacterProperties(s.selection.intervals[0]);
    if (characterProperties.bold === true || characterProperties.bold === undefined) {
        e.contextMenu.removeItem(DevExpress.RichEdit.ContextMenuCommandId.Copy);
        e.contextMenu.removeItem(DevExpress.RichEdit.ContextMenuCommandId.Paste);
        e.contextMenu.removeItem(DevExpress.RichEdit.ContextMenuCommandId.Cut);

        e.contextMenu.getItem(customizedOnEventItemId).visible = true;
        e.contextMenu.items[0].beginGroup = true;

        e.contextMenu.insertItem(new DevExpress.RichEdit.ContextMenuItem('CutCopy', {
            icon: 'close', text: 'Copy Paste Disabled', disabled: true
        }), 1);
    }
};

function onCustomCommandExecuted(s, e) {
    switch (e.commandName) {
        case googleSearchId:
            var selectedText = s.selection.activeSubDocument.getText(s.selection.intervals[0]);
            window.open("https://www.google.com/search?q=" + selectedText, "_blank");
            break;
    }
}
