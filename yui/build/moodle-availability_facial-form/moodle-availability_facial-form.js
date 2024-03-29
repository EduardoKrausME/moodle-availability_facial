YUI.add('moodle-availability_facial-form', function(Y, NAME) {

    /**
     * JavaScript for form editing facial conditions.
     *
     * @module moodle-availability_facial-form
     */
    M.availability_facial = M.availability_facial || {};

    /**
     * @class M.availability_facial.form
     * @extends M.core_availability.plugin
     */
    M.availability_facial.form = Y.Object(M.core_availability.plugin);

    /**
     * Groupings available for selection (alphabetical order).
     *
     * @property facial
     * @type Array
     */
    M.availability_facial.form.facial = null;

    /**
     * Initialises this plugin.
     *
     * @method initInner
     * @param {Array} standardFields Array of objects with .field, .display
     * @param {Array} customFields Array of objects with .field, .display
     */
    M.availability_facial.form.initInner = function(facialfromstart) {
        this.facial = facialfromstart;
    };

    M.availability_facial.form.getNode = function(json) {
        // Create HTML structure.
        var strings = M.str.availability_facial;

        if (json.d === undefined) {
            json.d = '';
        }

        var html = '<span class="availability-group"><label>' + strings.conditiontitle + ' ' +
            '<input type="hidden" size="4" name="field" value="1"></label> minutos</span>';
        var node = Y.Node.create('<span>' + html + '</span>');

        // Set initial values if specified.
        if (json.d !== undefined) {
            node.one('input[name=field]').set('value', json.d);
        }

        // Add event handlers (first time only).
        if (!M.availability_facial.form.addedEvents) {
            M.availability_facial.form.addedEvents = true;
            var updateForm = function(input) {
                var ancestorNode = input.ancestor('span.availability_facial');
                M.core_availability.form.update();
            };
            var root = Y.one('#fitem_id_availabilityconditionsjson');
            root.delegate('change', function() {
                updateForm(this);
            }, '.availability_facial input[name=field]');
        }

        return node;
    };

    M.availability_facial.form.fillValue = function(value, node) {
        // Set field.
        value.d = node.one('input[name=field]').get('value');
    };

}, '@VERSION@', {"requires" : ["base", "node", "event", "moodle-core_availability-form"]});
