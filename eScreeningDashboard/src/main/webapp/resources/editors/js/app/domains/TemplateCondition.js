/**
 * Created by pouncilt on 10/23/14.
 */
/**
 * Represents the application api.  If the variable is already defined use it,
 * otherwise create an empty object.
 *
 * @type {EScreeningDashboardApp|*|EScreeningDashboardApp|*|{}|{}}
 */
var EScreeningDashboardApp = EScreeningDashboardApp || {};
/**
 * Represents the application static variable. Use existing static variable, if one already exists,
 * otherwise create a new one.
 *
 * @static
 * @type {*|EScreeningDashboardApp.models|*|EScreeningDashboardApp.models|Object|*|Object|*}
 */
EScreeningDashboardApp.models = EScreeningDashboardApp.models || EScreeningDashboardApp.namespace("gov.va.escreening.models");

/**
 * Constructor method for the TemplateCondition class.  The properties of this class can be initialized with
 * the jsonConfig.
 * @class
 * @classdesc   This class is a domain model class; which means it has both behavior and state
 *              information about the user.
 * @param {String}  jsonConfig  Represents the JSON representation of an TemplateCondition object.
 * @constructor
 * @author Tonté Pouncil
 */
EScreeningDashboardApp.models.TemplateCondition = function (jsonConfig) {
    this.guid = EScreeningDashboardApp.getInstance().guid();
    this.connector;
    this.left;
    this.operator;
    this.right;

    if(Object.isDefined(jsonConfig)) {
        this.connector = (Object.isDefined(jsonConfig.connector))? jsonConfig.connector: null;
        this.left = (Object.isDefined(jsonConfig.left))? new EScreeningDashboardApp.models.TemplateLeftVariable(jsonConfig.left): null;
        this.operator = (Object.isDefined(jsonConfig.operator))? jsonConfig.operator: null;
        this.right = (Object.isDefined(jsonConfig.right))? new EScreeningDashboardApp.models.TemplateRightVariable(jsonConfig.right): null;
    }

    this.toString = function () {
        return "TemplateCondition [guid: " + guid +
            ", connector: " + this.connector +
            ", left variable: " + this.left +
            ", operator: " + this.operator +
            ", right operator: " + this.operator + "]";
    };

	function autoGenerateFields() {
		this.summary = this.connector + " " + (this.left.content.displayName || this.left.content.name) + " " + this.operator + " " + this.right.content;
	}

	this.autoGenerateFields = autoGenerateFields;
};
EScreeningDashboardApp.models.TemplateCondition.createConditionsArray = function(jsonConditionsConfig) {
    var conditions = [];

    jsonConditionsConfig.forEach(function (jsonConditionConfig){
        conditions.push(new EScreeningDashboardApp.models.TemplateCondition(jsonConditionConfig));
    });

    return conditions;
};
EScreeningDashboardApp.models.TemplateCondition.OrConditionMinimumConfig = {
    connector: "or",
    left: {
        type: "var",
        content: {}
    },
    right: {
        type: "text",
        content: ""
    },
    conditions: []
};
EScreeningDashboardApp.models.TemplateCondition.AndConditionMinimumConfig = {
    connector: "and",
    left: {
        type: "var",
        content: {}
    },
    right: {
        type: "text",
        content: ""
    },
    conditions: []
};