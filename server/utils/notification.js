const sendAssignmentNotification=(talent,task)=>{
    console.log("==================================");
    console.log("📢 ASSIGNMENT NOTIFICATION");
    console.log(`To: ${talent.name}`);
    console.log(`Email: ${talent.email}`);
    console.log(`Task: ${task.title}`);
    console.log("Message: You have been assigned a new task!");
    console.log("==================================");
};

module.exports= sendAssignmentNotification;