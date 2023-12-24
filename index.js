function toggleMenu() {
    var toggleVariable = document.getElementsByClassName('menu-block')[0];
    if(toggleVariable.style.display == 'none') {
        toggleVariable.style.display = '';
    }else {
        toggleVariable.style.display = 'none'
    }
}



var  projectappend=[{
    name:'js project one '
},
{
name:'js project two'
}

]


function project(list) {
projectappend.forEach(function(value,index){
    var template = '<div class="project-card">' +value.name +
        '<ul>' +
        '<li>Task One</li>' +
        '<li>Task Two</li>' +
        '</ul>' +
        '</div>';
      
    document.getElementById(list).innerHTML += template;
   
    })
}


function removecards(boardid){
   document.getElementById('boardid').innerHTML = '';
   
   
}

var idname=1;
function addBoard(id){
        idname++;
        var list="projectid_" + idname;
        var boardid="board_"+ idname;
   
    var templateBlock = '<section class ="board-block"+id ='+boardid +'>'+
    '<div>'+id.value+'<button onclick="removecards()">Remove Card</button></div>'+
    '<div class="project-block" id ='+ list + '>'+
        
    '</div>'+
    '</section>'

    document.getElementById('boardBlockList').innerHTML += templateBlock;
    project(list);
    document.getElementById('menulist').innerHTML +='<li onClick ="loadMenu('+boardid+')">'+id.value+"</li>";
}

function loadMenu(element){
    console.log(element.id);
    document.getElementById(element.id).style.display = 'block';
}



