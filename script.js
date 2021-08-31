 function setupResponsiveTables() {
        var tables = document.getElementsByClassName("av-table-responsive");
        for (t = 0; t < tables.length; t++) {
            var table = tables[t];
            var tablerows = table.getElementsByTagName("tr");
            var tableheads = tablerows[0].getElementsByTagName("th");
            
            if (tableheads.length>0) {
                for (r = 1; r < tablerows.length; r++) {
                    var row = tablerows[r];
                    var tablecols = row.getElementsByTagName("td");
                    for (c = 0; c < tablecols.length; c++) {
                        var col = tablecols[c];
                        if (!col.hasAttribute("data-label")) {
                            var head = tableheads[c];
                            if (head.hasAttribute("data-label")) {
                                col.setAttribute("data-label", head.getAttribute("data-label"));
                            } else {
                                col.setAttribute("data-label", head.innerHTML);
                            }
                        }
                    }
                }
            }
            
        }
    }
