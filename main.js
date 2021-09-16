var list_of_the_student_array=[]
function submit(){
    var display_list_of_the_student_array=[]
    for(var j= 1; j <= 4; j++){
        var student_name= document.getElementById("student_name_"+ j).value
        console.log(student_name)
        list_of_the_student_array.push(student_name)
    }
    console.log(list_of_the_student_array)
    var length_of_the_array= list_of_the_student_array.length;
    console.log(length_of_the_array)
    for(var k = 0; k < length_of_the_array; k++){
        display_list_of_the_student_array.push("<h4> Name-" + list_of_the_student_array[k] + "</h4>")
        console.log(display_list_of_the_student_array)
    }
    console.log(display_list_of_the_student_array)
    document.getElementById("display_name_with_commas").innerHTML= display_list_of_the_student_array
    console.log(display_list_of_the_student_array)
   document.getElementById("button_submit").style.display="none"
    document.getElementById("button_sort").style.display="inline-block"
    


}
function sort(){
    list_of_the_student_array.sort()
    console.log(list_of_the_student_array)
    var display_name_of_the_student_array_sort = [];
    var display_list_of_the_student_array_sort_length= list_of_the_student_array.length;
    console.log(display_list_of_the_student_array_sort_length)
    for(var k = 0; k < display_list_of_the_student_array_sort_length; k++){
        display_name_of_the_student_array_sort.push("<h4> Name-" + list_of_the_student_array[k] + "</h4>")
        console.log(display_name_of_the_student_array_sort)   
    }
    var remove_commas= display_name_of_the_student_array_sort.join(" ")
    console.log(remove_commas)
    
    
        document.getElementById("display_name_without_commas").innerHTML= remove_commas
}
