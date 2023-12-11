Office.initialize = function () {};

function run() {
  Excel.run(context => {
    // run your code from here
    context.workbook.worksheets.getActiveWorksheet().getRange("A1").values = [['Hello world!']];

    return context.sync();
  });
}

Office.actions.associate("run", run);
