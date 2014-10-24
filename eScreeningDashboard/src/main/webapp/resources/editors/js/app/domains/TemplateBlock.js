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
 * Constructor method for the TemplateBlock class.  The properties of this class can be initialized with
 * the jsonConfig.
 * @class
 * @classdesc   This class is a domain model class; which means it has both behavior and state
 *              information about the user.
 * @param {String}  jsonConfig  Represents the JSON representation of an TemplateBlock object.
 * @constructor
 * @author Tonté Pouncil
 */
EScreeningDashboardApp.models.TemplateBlock = function (jsonConfig) {
    this.guid = new Date().getTime();
    this.section;
    this.name;
    this.type;
    this.summary;
    this.left;
    this.operator;
    this.conditions;
    this.right;

    if(jsonConfig){
        this.guid = (Object.isDefined(jsonConfig.guid))? jsonConfig.guid: this.guid;
        this.section = (Object.isDefined(jsonConfig.section))? jsonConfig.section: null;
        this.name = (Object.isDefined(jsonConfig.name))? jsonConfig.name: null;
        this.type = (Object.isDefined(jsonConfig.name))? jsonConfig.name: null;
        this.summary = (Object.isDefined(jsonConfig.summary))? jsonConfig.summary: null;
        this.left = (Object.isDefined(jsonConfig.left))? jsonConfig.left: null;
        this.operator = (Object.isDefined(jsonConfig.operator))? jsonConfig.operator: null;
        this.conditions = (Object.isArray(jsonConfig.conditions))? jsonConfig.conditions: [];
        this.right = (Object.isDefined(jsonConfig.right))? jsonConfig.right: null;
    }


    this.toString = function () {
        return "TemplateBlock [guid: " + guid +
            ",section: " + this.section +
            ", name: " + this.name +
            ", type: " + this.type +
            ", summary: " + this.summary +
            ", leftVariable: " + this.left +
            ", operator: " + this.operator +
            ", rightVariable: " + this.right +
            ", conditions: " + this.conditions + "]";
    };
};