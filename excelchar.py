import win32com.client as win32
excel = win32.gencache.EnsureDispatch('Excel.Application')
wb = excel.Workbooks.Open('C:\\Users\\169151\\Documents\\GitHub\\mocr.js\\test.xlsx')
excel.Visible = True
ws=wb.Worksheets(1)
c=ws.Cells(1,1)
# c.GetCharacters(2).Font.Bold=True
for ind in range(c.Characters.Count):
 print(c.GetCharacters(ind+1,1).Font.ColorIndex)