# Fix Edit Button in Timetable Page

## Tasks
- [x] Add editMode state to timetable page component
- [x] Add onClick handler to Edit button to toggle editMode
- [x] Implement onSlotUpdate function to call backend API for updating class slots
- [x] Pass editMode and onSlotUpdate props to TimetableGrid component
- [x] Update button text/icon based on editMode state
- [x] Test the edit functionality (TypeScript errors resolved)

## Information Gathered
- The TimetableGrid component supports editMode and onSlotUpdate props for inline editing
- Backend has update_slot endpoint in ClassViewSet for updating class meeting times
- Edit button currently has no functionality

## Plan
1. Add useState for editMode in the timetable page
2. Add toggle function for editMode
3. Implement onSlotUpdate function that calls the API
4. Update the Edit button with onClick handler and dynamic text
5. Pass props to TimetableGrid
