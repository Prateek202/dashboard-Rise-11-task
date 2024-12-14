# Overview

This project is a dashboard interface designed to help users manage and monitor claims, disputes, activities, and relevant documents effectively. It includes functionality for uploading documentation, managing claim values, and providing a user-friendly interface for various legal or arbitration-related tasks.


# Approach to Building the Dashboard
# Tech Stack:

# Frontend: 
Built using React and Vite for fast development and a smooth user interface.
Styling: Implemented with Tailwind CSS and Material UI to ensure a clean and modern look.
State Management: React's built-in state hooks are used to manage form inputs and dynamic states.
UI Design:

Designed a clean layout inspired by legal platforms.
Sidebar navigation improves accessibility to multiple sections (e.g., "Dashboard", "My Cases", "Activities").

# Logical grouping of components:
Claim Value Section: Allows for input of Contract Value and Claim Value.
Documentation Uploads: Offers distinct areas for statements, agreements, and additional documents.


# Form Validation:

Added inline checks for contract value and claim value to provide real-time feedback (e.g., "150% of Contract Value" in red).
Files are validated for format and size (e.g., Max 2MB PDFs).


# Challenges and Resolutions

# Dynamic Claim Value Validation:

# Challenge: 
Ensuring the Claim Value dynamically reflects 150% of the Contract Value.
Solution: Used controlled React state with conditional rendering to update the claim warning in real-time.
File Upload Restrictions:

# Challenge: 
Restricting file formats and sizes while maintaining a smooth user experience.
Solution: Added file input validation and error handling, restricting files to PDF format with a maximum size of 2MB.
Responsive Design:

# Challenge: 
Ensuring the dashboard remains functional and clean on different screen sizes.
Solution: Utilized responsive utility classes from Tailwind CSS to adapt components across screen breakpoints.

# Assumptions Made
The maximum file size for uploads is 2MB, and files should be in PDF format.
150% Claim Value validation is a key requirement and must be displayed visually in red text.
Users need the option to upload additional supporting documentation in various categories.
The "Place" and "Language" toggle sections default to "No" if no selection is made.

# screenshots

# Desktop View
    
![Screenshot (636)](https://github.com/user-attachments/assets/00c99ed6-9510-4b4f-a8b0-970b7fb35b4a)        



# Tablet View


![Screenshot (639)](https://github.com/user-attachments/assets/b7252379-db44-41cd-85a1-9c9e465d330f)



# Mobile View


![Screenshot (638)](https://github.com/user-attachments/assets/b56c7e60-13f1-44b0-8329-a1417ce93e49)
