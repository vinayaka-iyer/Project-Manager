import { useEffect, useState } from "react";
import "./Create.css";
import Select from 'react-select'
import { useCollection } from "../../hooks/useCollection";

export default function Create() {
	// form field values
	const [name, setName] = useState("");
	const [details, setDetails] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [category, setCategory] = useState("");
	const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null)

  // assigned users options
  const {documents} = useCollection('users')
  const [users, setUsers] = useState([])

  useEffect(() =>{
    if(documents){
      const options = documents.map(user => {
        return {value: user, label: user.displayName}
      })
      setUsers(options)
    }
  },[documents])

	const handleSubmit = async (e) => {
		e.preventDefault();
    setFormError(null);
    if(!category) {
      setFormError('Please select a project category')
      return
    }
    if(assignedUsers.length < 1){
      setFormError('Please assign the project to at least 1 user')
      return
    }


	};

  const categories = [
    {value: 'development', label: 'Development'},
    {value: 'design', label: 'Design'},
    {value: 'sales', label: 'Sales'},
    {value: 'marketing', label: 'Marketing'},

  ]

	return (
		<div className='create-form'>
			<h2 className='page-title'>Create a new Project</h2>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Project name:</span>
					<input
						required
						type='text'
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
				</label>
				<label>
					<span>Project Details:</span>
					<textarea
						required
						onChange={(e) => setDetails(e.target.value)}
						value={details}
					></textarea>
				</label>
				<label>
					<span>Set due date:</span>
					<input
						required
						type='date'
						onChange={(e) => setDueDate(e.target.value)}
						value={dueDate}
					/>
				</label>
				<label>
					<span>Project category:</span>
					<Select
          options= {categories}
          onChange={(option) => setCategory(option)} />
				</label>
				<label>
					<span>Assign to:</span>
					<Select
          onChange={(option) => setAssignedUsers(option)}
          options={users}
          isMulti />
				</label>

				<button className='btn'>Add Project</button>
        {formError && <p className="error">{formError}</p>}
			</form>
		</div>
	);
}