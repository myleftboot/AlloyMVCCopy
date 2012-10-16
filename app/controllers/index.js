function doClick(e) {

	if (OS_IOS || OS_MOBILEWEB) {
		$.navgroup.open(Alloy.createController('detail').getView());
	} else {
		Alloy.createController('detail').getView().open();
	}
    Ti.App.fireEvent('MVC:tab:itemSelected', {
			name:e.rowData.title,
			price:e.rowData.price
	});
}

if (OS_IOS || OS_MOBILEWEB) {
	// attach the navgroup to Alloy.CFG so it can be accessed globally
	Alloy.CFG.navgroup = $.navgroup;
}

//some dummy data for our table view
var tableData = [
	{title:'Apples', price:'1.25', hasChild:true, color: '#000'},
	{title:'Grapes', price:'1.50', hasChild:true, color: '#000'},
	{title:'Oranges', price:'2.50', hasChild:true, color: '#000'},
	{title:'Bananas', price:'1.50', hasChild:true, color: '#000'},
	{title:'Pears', price:'1.40', hasChild:true, color: '#000'},
	{title:'Kiwis', price:'1.00', hasChild:true, color: '#000'}
];

$.MasterTable.setData(tableData);

$.index.open();
