import React, { useState } from 'react';
import Papa from 'papaparse';
import Frame from './images/Frame.svg';

const UploadCsv = () => {
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
          className="border p-2"
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

  return (
    <><h1 className="text-3xl font-bold mb-4">Uploads</h1>
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-screen-md w-full">
        <div className="text-3xl font-bold mb-4"></div>
        <div className="csv-main p-8 rounded-md text-left flex flex-col items-center">
          <div className="csv-upload border-dotted border-black p-4 flex items-center justify-center">
            <label className="cursor-pointer block">
              <input type="file" accept=".csv" onChange={handleFileUpload} className="hidden" />
              <div className="border-dotted  border-black p-2">
                <img src={Frame} alt="Upload" className="w-full p-10 h-full" style={{ border: '2px dotted #000' }} />
              </div>
            </label>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Upload</button>
        </div>

        {csvData.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Parsed CSV Data:</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr>
                    {Object.keys(csvData[0]).map((header) => (
                      <th key={header} className="border p-2 bg-gray-200">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {csvData.map((row, index) => (
                    <tr key={index}>
                      {Object.entries(row).map(([key, value], idx) => (
                        <td key={idx} className="border p-2">
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
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default UploadCsv;
