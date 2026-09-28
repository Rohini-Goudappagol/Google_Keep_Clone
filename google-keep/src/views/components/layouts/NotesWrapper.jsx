import '../../../styles/notesWrapper.css'
import Header from '../Header';
import SideBar from '../Sidebar';


 const NotesWrapper = ({children}) => {
  return (
    <div>
      <div className="noteParentContainer">
        <Header/>
        <div className="noteContentContainer">
          {/* sidebar */}
          <SideBar />
          <div className="childrenContentContainer">
            {children}
        </div>
        </div>
      </div>
    </div>
  );
};
export default NotesWrapper