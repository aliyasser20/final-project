import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button, ButtonGroup } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VideocamIcon from "@material-ui/icons/Videocam";
import BuildRoundedIcon from "@material-ui/icons/BuildRounded";

import Edit from "../../../UI/SVGIcons/Edit";

import * as actions from "../../../../store/actions/index";

import "./ModeSelector.scss";

const ModeSelector = props => {
  let modes;

  const viewClasses =
    props.currentMode === "VIEW" ? "mode-button selected" : "mode-button";
  const editClasses =
    props.currentMode === "EDIT" ? "mode-button selected" : "mode-button";
  const mediaClasses =
    props.currentMode === "MEDIA" ? "mode-button selected" : "mode-button";

  return (
    <div className="modes-selector">
      <ButtonGroup
        classes={{ root: "mode-buttons" }}
        color="primary"
        aria-label="outlined primary button group"
      >
        <Button
          onClick={() => props.onModeSelect("VIEW")}
          classes={{ root: viewClasses }}
        >
          <VisibilityIcon fontSize="small" />
          View
        </Button>
        <Button
          onClick={() => props.onModeSelect("EDIT")}
          classes={{ root: editClasses }}
        >
          <Edit />
          Edit
        </Button>
        <Button
          onClick={() => props.onModeSelect("MEDIA")}
          classes={{ root: mediaClasses }}
        >
          <VideocamIcon fontSize="small" />
          Media
        </Button>
      </ButtonGroup>
    </div>
  );
};

ModeSelector.propTypes = {
  currentMode: PropTypes.string.isRequired,
  onModeSelect: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentMode: state.modeControl.currentMode
});

const mapDispatchToProps = dispatch => ({
  onModeSelect: mode => dispatch(actions.modeSelect(mode))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModeSelector);