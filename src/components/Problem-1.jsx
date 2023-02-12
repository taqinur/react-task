import React, {useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');

    const handleClick = (val) =>{
        if (val ==='all'){
            setShow('all');
            setTaskStatus(tasks.sort((a,b)=> {
                let statusA = a.status;
                let statusB = b.status;
                
                if (statusA < statusB){
                    return -1;
                }
                if (statusA > statusB){
                    return 1;
                }
            }));
        }
        else if (val === 'active'){
            setShow('active');
            setTaskStatus(tasks.filter(task => task.status.includes('active')));
        }
        else if (val === 'completed'){
            setShow('completed');
            setTaskStatus(tasks.filter(task => task.status.includes('completed')));
        }
    }

    const [tasks, setTasks] = useState([]);
    console.log(tasks);

    const handleTasks = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const status = event.target.status.value;
        setTasks([...tasks, {name, status}]);
    }
    const [taskStatus, setTaskStatus] = useState([]);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleTasks}>
                        <div className="col-auto">
                            <input
                            name='name' type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input name='status' type="text" className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                taskStatus.map(
                                    (task, i) => <tr key={i}>
                                    <td scope='col'>{task.name}</td>
                                    <td scope='col'>{task.status}</td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;