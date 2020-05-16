const initialData={
        tasks:{
            'task-1':{id:'task-1',content:'Morning Running'},
            'task-2':{id:'task-2',content:'Morning Bath'},
            'task-3':{id:'task-3',content:'Eating Breakfast'},
            'task-4':{id:'task-4',content:'Going To Office'},
            'task-5':{id:'task-5',content:'Afternoon Lunch'},
            'task-6':{id:'task-6',content:'Evening Tea'},
            'task-7':{id:'task-7',content:'Coming to Home'},
            'task-8':{id:'task-8',content:'Night Dinner'},
            'task-9':{id:'task-9',content:'Night sleep'},
        },
        columns:{
            'column-1':{ id:'column-1', title:'Done', taskIds:[]},
            'column-2':{ id:'column-2', title:'To do', taskIds:['task-1','task-2','task-3','task-4','task-5','task-6','task-7','task-8','task-9']},
        },
        columnOrder:['column-1','column-2']
}

export default initialData;