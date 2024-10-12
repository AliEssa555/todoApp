import { format, compareAsc } from "date-fns";
format(new Date(2014, 1, 11), "MM/dd/yyyy");
import toDoItem from "./todoitem";
//=> '02/11/2014'

export default function Project(name){
    this.name=name;
    this.toDoList=[];
    this.setName=function(newName){
        this.name=newName;
    };
    this.getName=function(){
        return this.name;
    }
    this.getToDoList = function () {
        return this.toDoList;
    };
    this.addToProject=function(task){
        this.toDoList.push(task);
    };
    this.removeFromProject=function(taskTitle){
        this.toDoList = this.toDoList.filter(task => task.getTitle() !== taskTitle);

    };
    this.getTask = function (taskTitle) {
        return this.toDoList.find(task => task.getTitle() === taskTitle) || null;
    };
};