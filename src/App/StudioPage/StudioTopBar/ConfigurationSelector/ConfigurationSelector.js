import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button, Popover, IconButton, CardActions } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

import * as actions from "../../../../store/actions/index";

import "./ConfigurationSelector.scss";

const ConfigurationSelector = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const configurationOptions = props.allConfigurations.map(configuration => {
    const optionClasses =
      props.currentConfigurationName === configuration.name
        ? "configuration-option selected"
        : "configuration-option";

    const handleSelectConfigurationOption = () => {
      props.onSetCurrentConfigurationName(configuration.name);
      props.onSetCurrentConfigurationId(configuration.id);
      props.onSetConfiguration(JSON.parse(configuration.config_data));
    };

    return (
      <div
        key={configuration.name}
        className={optionClasses}
        onClick={handleSelectConfigurationOption}
      >
        <p className="configuration-name">{configuration.name}</p>
        <IconButton
          aria-label="delete-configuration"
          classes={{ root: "delete-configuration-button" }}
          size="small"
          // onClick={() => fileExporter()}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    );
  });

  return (
    <div className="configuration-selector">
      <span className="gradient-button">
        <Button
          onClick={handleClick}
          variant="contained"
          endIcon={<ExpandMoreIcon />}
        >
          {props.currentConfigurationName}
        </Button>
      </span>
      <Popover
        className="configuration-selector-popover"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
      >
        <div className="configuration-selector-popover-content">
          <div className="configuration-options">{configurationOptions}</div>
          <div className="add-configuration-area">
            <span className="gradient-button">
              <Button
                onClick={handleClose}
                variant="contained"
                startIcon={<AddIcon />}
              >
                New Configuration
              </Button>
            </span>
          </div>
        </div>
      </Popover>
    </div>
  );
};

ConfigurationSelector.propTypes = {
  currentConfigurationName: PropTypes.string.isRequired,
  allConfigurations: PropTypes.array.isRequired,
  onSetCurrentConfigurationName: PropTypes.func.isRequired,
  onSetCurrentConfigurationId: PropTypes.func.isRequired,
  onSetConfiguration: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentConfigurationName: state.configurations.currentConfigurationName,
  allConfigurations: state.configurations.allConfigurations
});

const mapDispatchToProps = dispatch => ({
  onSetCurrentConfigurationName: name =>
    dispatch(actions.setCurrentConfigurationName(name)),
  onSetCurrentConfigurationId: id =>
    dispatch(actions.setCurrentConfigurationId(id)),
  onSetConfiguration: config => dispatch(actions.setConfiguration(config))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigurationSelector);