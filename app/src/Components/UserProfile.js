import { useState } from 'react';
import Footer from './Footer';

function UserProfile() {
  const [isEditing, setIsEditing] = useState(true); // Toggle to show form
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    setIsEditing(false); // Exit editing mode after submission
  };

  return (
    <div className='mx-4 my-10'>
      <div className="user-profile p-6 ring-offset-gray-600 bg-white ring-inset rounded w-full shadow-md">
        <h1 className="text-2xl font-bold mb-6">User Profile</h1>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/** Input Fields */}
            {[
              { label: 'First Name', name: 'name', type: 'text' },
              { label: 'Last Name', name: 'lastName', type: 'text' },
              { label: 'Phone', name: 'phone', type: 'text' },
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'Address', name: 'address', type: 'text' }
            ].map(({ label, name, type, placeholder }) => (
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4" key={name}>
                <label className="block text-sm font-medium w-full sm:w-1/3">{label}:</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                
                />
              </div>
            ))}
            <div className="flex flex-col sm:flex-row justify-between mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full sm:w-auto transition duration-200 hover:bg-blue-600"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-red-500 text-white font-bold py-2 px-4 rounded w-full sm:w-auto transition duration-200 hover:bg-red-600"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4 text-left">
            {/** Display User Information */}
            {[
              { label: 'First Name', value: formData.name },
              { label: 'Last Name', value: formData.lastName },
              { label: 'Phone', value: formData.phone },
              { label: 'Email', value: formData.email },
              { label: 'Address', value: formData.address }
            ].map(({ label, value }) => (
              <p className="flex space-x-4" key={label}>
                <span className="font-bold w-1/3">{label}:</span>
               
              </p>
            ))}
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>
        )}
      </div>
      <Footer /> {/* Footer remains at the bottom */}
    </div>
  );
}

export default UserProfile;
