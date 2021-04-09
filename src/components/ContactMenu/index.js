import React, { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch } from "react-redux";
import { contactDeleted } from "../../redux/actions";
import ConfirmDialog from "../ConfirmDialog";
import EditorDialog from "../EditorDialog";

function ContactMenu({ contact }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenMenu = (event) => {setAnchorEl(event.currentTarget);};
  const handleCloseMenu = () => {setAnchorEl(null);};

  const [confirmDialogOpened, setConfirmDialogOpened] = useState(false);

  const handleConfirmDialog = () => {setConfirmDialogOpened(!confirmDialogOpened);
    handleCloseMenu();};

  const [editorOpened, setEditorOpened] = useState(false);
  const handleEditor = () => {setEditorOpened(!editorOpened);
    handleCloseMenu();};

  const handleDelete = () => {dispatch(contactDeleted(contact.id));};

  return (
    <>
      <IconButton edge="end" onClick={handleOpenMenu}>
        <MoreVertIcon />
      </IconButton>
      <Menu open={Boolean(anchorEl)} onClose={handleCloseMenu} anchorEl={anchorEl}>
        <MenuItem onClick={handleEditor}>Редактировать</MenuItem>
        <MenuItem onClick={handleConfirmDialog}>Удалить</MenuItem>
      </Menu>
      <ConfirmDialog isOpened={confirmDialogOpened} handleClose={handleConfirmDialog} handleDelete={handleDelete}/>
      <EditorDialog contact={contact} isOpened={editorOpened} handleClose={handleEditor}
      />
    </>
  );
}

export default ContactMenu;
