import './Template.css'
export const HeadTemplate = () => {
  const tableStyle = {
    display: "flex",
    border: "1px solid #000",
  };

  const columnStyle = {
    flex: 1,
    padding: "10px",
    borderRight: "1px solid #000",
  };
  
  
  return (
    <div>
      
      <div style={tableStyle}>
        <div style={columnStyle}>
          <div className='input-field'>
            <label htmlFor="textInput">ID</label>
            <input type="text" id="ID" name="ID" className="custom-input" />
          </div>
          <div className='input-field'>
            <label htmlFor="textInput">Age</label>
            <input type="text" id="age" name="age" className="custom-input" />
          </div>
          <div className='input-field'>
            <label htmlFor="textInput">Accession Number:</label>
            <input type="text" id="accession-Number" name="accession-Number" className="custom-input" />
          </div>
          <div className='input-field'>
            <label htmlFor="textInput"> Referring Physician:</label>
            <input type="text" id="referring-Physician" name="referring-Physician" className="custom-input"/>
          </div>
          <div className='input-field'>
            <label htmlFor="textInput"> Study date:</label>
            <input type="text" id="study-date" name="study-date" className="custom-input" />
          </div>
        </div>
        <div style={columnStyle}>
        <div className='input-field'>
            <label htmlFor="textInput">Name</label>
            <input type="text" id="name" name="name" className="custom-input" />
          </div>
          <div className='input-field'>
            <label htmlFor="textInput">Sex</label>
            <input type="text" id="sex" name="sex" className="custom-input"/>
          </div>
          <div className='input-field'>
            <label htmlFor="textInput">Modility</label>
            <input type="text" id="modility" name="modility" className="custom-input"/>
          </div>
          <div className='input-field'>
            <label htmlFor="textInput">Study:</label>
            <input type="text" id="study" name="study" className="custom-input"/>
          </div>
        </div>
      </div>
    </div>
  );
};
