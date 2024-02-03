
import React, { useState } from 'react';
import Papa from 'papaparse';


const Uploaded = () => {
    const [csvData, setCsvData] = useState([]);
    const [selectedTags, setSelectedTags] = useState({});
  
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
  
      Papa.parse(file, {
        complete: (result) => {
          setCsvData(result.data);
        },
        header: true, 
      });
    };
  
    const handleTagSelection = (index, selectedTag) => {
      setSelectedTags((prevSelectedTags) => {
        const updatedSelectedTags = { ...prevSelectedTags };
    
        if (!updatedSelectedTags[index]) {
          updatedSelectedTags[index] = [selectedTag];
        } else {
          updatedSelectedTags[index] = [...updatedSelectedTags[index], selectedTag];
        }
    
        return updatedSelectedTags;
      });
    };
    
    
  
  const handleRemoveTag = (index, tagToRemove) => {
    setSelectedTags((prevSelectedTags) => {
      const updatedSelectedTags = { ...prevSelectedTags };
  
      if (updatedSelectedTags[index]) {
        updatedSelectedTags[index] = updatedSelectedTags[index].filter(
          (tag) => tag !== tagToRemove
        );
  
        if (updatedSelectedTags[index].length === 0) {
          delete updatedSelectedTags[index];
        }
      }
  
      return updatedSelectedTags;
    });
  };
  
  
  
  const renderDropdown = (index, tags) => {
    const tagArray = tags.split(',').map((tag) => tag.trim());
    return (
      <div>
        <select
          value={selectedTags[index] || ''}
          onChange={(e) => handleTagSelection(index, e.target.value)}
        >
          <option value="">Select Tag</option>
          {tagArray.map((tag, idx) => (
            <option key={idx} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        {selectedTags[index] && selectedTags[index].length > 0 && (
          <div className="selected-tags">
            {/* {selectedTags[index].map((tag, idx) => (
              <span key={idx} className="selected-tag">
                {tag}
                <button onClick={() => handleRemoveTag(index, tag)}>&times;</button>
              </span>
            ))} */}
          </div>
        )}
      </div>
    );
  };
  
  // ...
  
    
  
    return (
      <div>
        {/* <h1>C</h1> */}
        <input type="file" accept=".csv" onChange={handleFileUpload} />
  
        {csvData.length > 0 && (
          <div>
            <h2>Parsed CSV Data:</h2>
            <table>
              <thead>
                <tr>
                  {Object.keys(csvData[0]).map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
              {csvData.map((row, index) => (
    <tr key={index}>
      {Object.entries(row).map(([key, value], idx) => (
        <td key={idx}>
          {key === 'selected tags' ? (
            selectedTags[index] && selectedTags[index].length > 0 ? (
              <div className="selected-tags">
                {selectedTags[index].map((tag, idx) => (
                  <span key={idx} className="selected-tag">
                    {tag}
                    <button onClick={() => handleRemoveTag(index, tag)}>&times;</button>
                  </span>
                ))}
              </div>
            ) : (
              'No Tags Selected'
            )
          ) : key === 'select tags' ? (
            renderDropdown(index, value)
          ) : key === 'links' ? (
            <a href={value} target="_blank" rel="noopener noreferrer">
              {value}
            </a>
          ) : (
            value
          )}
        </td>
      ))}
    </tr>
  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
  

export default Uploaded
