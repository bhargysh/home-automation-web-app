function showalert(){
	swal({
	title: "Confirm changes?",
	text: "You will not be able to recover this imaginary file!",
	type: "warning",
	showCancelButton: true,
	confirmButtonColor:"#00bcd4",
	confirmButtonText: "Yes, Continue!",
	cancelButtonText: "No, cancel!",
	closeOnConfirm: false,
	closeOnCancel: false
	},
	
	function(isConfirm){
	if (isConfirm) {
		swal("Submitted!", "Changes made!", "success");
		}
	else{
		swal("Cancelled", "No changes made", "error");
		}
	});
}