import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../../store/actions/index";
import Edit from "./Edit/Edit";
import View from "./View/View";
import Media from "./Media/Media";

const Modes = (props) => (
  <>
    <div className="mode-btn-group">
      <button
        type="button"
        className="mode-selector view"
        onClick={(e) => props.onModeSelect("VIEW")}
      >
        view mode
      </button>
      <button
        type="button"
        className="mode-selector edit"
        onClick={(e) => props.onModeSelect("EDIT")}
      >
        edit mode
      </button>
      <button
        type="button"
        className="mode-selector media"
        onClick={(e) => props.onModeSelect("MEDIA")}
      >
        media mode
      </button>
    </div>
    <div className="modes">
      {props.currentMode === "VIEW" && <View />}
      {props.currentMode === "EDIT" && <Edit />}
      {props.currentMode === "MEDIA" && <Media />}
    </div>
  </>
);

Modes.propTypes = {
  currentMode: PropTypes.string.isRequired,
  onModeSelect: PropTypes.func.isRequired,
};

const mapStatetoProps = (state) => ({
  currentMode: state.modeControl.currentMode,
});

const mapDispatchToProps = (dispatch) => ({
  onModeSelect: (mode) => dispatch(actions.modeSelect(mode)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Modes);
