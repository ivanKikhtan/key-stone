function onCustomCommandExecuted(s, e) {
    switch (e.commandName) {
        case 'insertSignature':
            s.document.insertParagraph(s.document.length);
            s.document.insertText(s.document.length, '_________');
            s.document.insertParagraph(s.document.length);
            s.document.insertText(s.document.length, 'Best regards,');
            s.document.insertParagraph(s.document.length);
            s.document.insertText(s.document.length, 'John Smith');
            s.document.insertParagraph(s.document.length);
            s.document.insertText(s.document.length, 'john@example.com');
            s.document.insertParagraph(s.document.length);
            s.document.insertText(s.document.length, '+1 (818) 844-0000');
            break;
        case 'current_time':
            let currentDate = new Date();
            let dateString = currentDate.toLocaleDateString();
            s.document.insertText(s.document.length, dateString);
            break;
        case 'insertTableFromImage':
            insertTableFromImage(s)
            break;
    }
}
function insertTableFromImage(s) {
    var tableData = [
        ['Type of Land:', 'Commercial', 'Acreage:', '2.0'],
        ['Address:', '3651 Alabama Road', 'Sq. Ft.:', '87,120'],
        ['City, State:', 'Acworth, GA', 'Location:', 'Average'],
        ['Verification:', 'Tom Crumpton (Listing Agent)/CoStar', 'Access:', 'Good'],
        ['Sale Price:', '$700,000', 'Utility/Topography:', 'Average'],
        ['Sale Date:', '2/14/2024', 'On-Site Improvements:', 'Improved'],
        ['Price/SF:', '$8.03', 'Flood Plain:', 'None'],
        ['Grantor:', 'Danny Owens', 'Zoning:', 'GC, Commercial'],
        ['Grantee:', 'Not Disclosed', 'Shape:', 'Irregular'],
        ['--------', '--------', '--------', '--------'],
        ['Type of Land:', 'Commercial', 'Acreage:', '1.4'],
        ['Address:', '6065 Hwy 92', 'Sq. Ft.:', '58,806'],
        ['City, State:', 'Acworth, GA', 'Location:', 'Average'],
        ['Verification:', 'CoStar/Public Records', 'Access:', 'Good'],
        ['Sale Price:', '$750,000', 'Utility/Topography:', 'Average'],
        ['Sale Date:', '1/12/2023', 'On-Site Improvements:', 'Improved'],
        ['Price/SF:', '$12.75', 'Flood Plain:', 'None'],
        ['Grantor:', 'Sentry Land Management LLC', 'Zoning:', 'GC, Commercial'],
        ['Grantee:', '6065 Hwy 92 LLC', 'Shape:', 'Irregular'],
        ['--------', '--------', '--------', '--------'],
        ['Type of Land:', 'Commercial', 'Acreage:', '2.5'],
        ['Address:', '664 E. Rope Mill Lane', 'Sq. Ft.:', '108,464'],
        ['City, State:', 'Canton, GA', 'Location:', 'Average'],
        ['Verification:', 'Ashur Law and (Buyer)/CoStar', 'Access:', 'Average'],
        ['Sale Price:', '$750,000', 'Utility/Topography:', 'Average'],
        ['Sale Date:', '5/17/2022', 'On-Site Improvements:', 'Improved'],
        ['Price/SF:', '$6.91', 'Flood Plain:', 'None'],
        ['Grantor:', 'Silas L. Gable', 'Zoning:', 'GC, Commercial'],
        ['Grantee:', 'East Rope Mill Storage LLC', 'Shape:', 'Irregular'],
        ['--------', '--------', '--------', '--------'],
        ['Type of Land:', 'Commercial', 'Acreage:', '2.5'],
        ['Address:', '3084 Cobb Pkwy NW', 'Sq. Ft.:', '108,464'],
        ['City, State:', 'Kennesaw, GA', 'Location:', 'Good'],
        ['Verification:', 'CoStar/Public Records', 'Access:', 'Good'],
        ['Sale Price:', '$1,000,000', 'Utility/Topography:', 'Average'],
        ['Sale Date:', '4/1/2022', 'On-Site Improvements:', 'None'],
        ['Price/SF:', '$9.23', 'Flood Plain:', 'None'],
        ['Grantor:', 'Garland B. Cook & James D. Cook', 'Zoning:', 'C5, Commercial'],
        ['Grantee:', '3102 Cobb Pkwy LLC', 'Shape:', 'Irregular'],
    ];

    s.document.insertText(s.document.length, "Comp Table:");

    let tablePosition = s.document.length;
    let table = s.document.tables.create(tablePosition - 1, tableData[0].length, tableData.length);
    if (!table) {
        console.error('Table creation failed');
        return;
    }

    for (var r = 0; r < tableData.length; r++) {
        for (var c = 0; c < tableData[r].length; c++) {
            var cell = table.rows.getByIndex(r).cells.getByIndex(c);
            if (!cell) {
                console.error(`Cell (${r}, ${c}) creation failed`);
                continue;
            }
            cell.interval.start = cell.interval.end; // Move to the end of the current content
            s.document.insertText(cell.interval.start, tableData[r][c]);
        }
    }

    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows.getByIndex(i).cells.length; j++) {
            var cell = table.rows.getByIndex(i).cells.getByIndex(j);
            cell.width = 100; // Set cell width
            cell.borders.bottomLine.style = 'Single';
            cell.borders.bottomLine.width = 2;
            cell.borders.topLine.style = 'Single';
            cell.borders.topLine.width = 2;
            cell.borders.leftLine.style = 'Single';
            cell.borders.leftLine.width = 2;
            cell.borders.rightLine.style = 'Single';
            cell.borders.rightLine.width = 2;
        }
    }
}

function onDocumentLoaded(s, e) {
    s.document.insertText(0, 'Dear Mr Stanley,');
    s.document.insertParagraph(s.document.length);
    var startPosition = s.document.length;
    s.document.insertParagraph(startPosition);
    s.document.insertText(startPosition, '[Type your text here]');
    s.selection.setSelection(new DevExpress.RichEdit.Interval(startPosition, s.document.length - startPosition));
    s.focus();
}

function calculateDocumentVariable(s, e) {
    switch (e.variableName) {
        case "shit":
            e.value = "Shit Here We Go Again";
            e.Handled = true;
            break;
        default:
            break;
    }
}