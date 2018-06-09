//$("#personName").keyup(function () {
//    var value = $(this).val();
//    $("#name").text(value);
//}).keyup();

//$("#jobName").keyup(function () {
//    var value = $(this).val();
//    $("#job").text(value);
//}).keyup();

//$("#companyName").keyup(function () {
//    var value = $(this).val();
//    $("#company").text(value);
//}).keyup();

$('form').keyup(function () {
    var nameVar = $(this).find('#personName').val();
    var companyVar = $(this).find('#companyName').val();
    var jobVar = $(this).find('#jobName').val();
    $("#name").text(nameVar);
    $('span[id="company"]').text(companyVar);
    $('span[id="job"]').text(jobVar);
}).keyup();

$('#templateName').change(function () {
    var value = $(this).find(' :selected').text();
    $(".template").text(value);
}).change();

$('#signatureName').click(function() {
    $("#txtAge").toggle(this.checked);
});

// clipboard js functionality
new ClipboardJS('.btn');

// check char length
var length = $(".lead").text().length;
console.log(length);