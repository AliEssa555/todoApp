import { format, compareAsc } from "date-fns";
format(new Date(2014, 1, 11), "MM/dd/yyyy");
//=> '02/11/2014'

//dates.sort(compareAsc);
export default function toDoItem(title, description, dueDate, priority, completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;

    this.getTitle = function() { return this.title; };
    this.getDescription = function() { return this.description; };
    this.getDueDate = function() { return this.dueDate; };
    this.getPriority = function() { return this.priority; };
    this.setPriority=function(newPriority){
        this.priority=newPriority;
    }
    this.isCompleted = function() { return this.completed; };

    // Method to set completion status
    this.setCompleted = function(status) {
        this.completed = status;
    };

    // Method to toggle the completion status
    this.toggleCompleted = function() {
        this.completed = !this.completed;
    };
}



