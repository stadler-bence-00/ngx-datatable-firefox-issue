# DatatableFirefoxIssue

Project was made to showcase horizontal scrollbar issue with ngx-datatable by using Firefox v126.0.0

Steps to reproduce:

- install packages (npm install)
- run angular application (npm run start)

Actual behavior:

- Upon using the horizontal scrollbar, the table column headers does not move with their corresponding cells.
- Frozen-left columns do not keep their original position and after scrolling they are not visible.

Expected behavior:

- Table headers should be displayed over their corresponding cells even after scrolling the table horizontally.
- Frozen-left columns should be always visible despite scrolling the table horizontally.
