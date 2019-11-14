<?php
/**
 * Front-end class.
 *
 * @package    availability_facial
 * @author     Eduardo Kraus
 * @license    http://www.eduardokraus.com
 */

namespace availability_facial;

defined('MOODLE_INTERNAL') || die();

class frontend extends \core_availability\frontend {
    const DATE_SELECTOR_SUPPORTED = false;

    protected function get_javascript_strings() {
        return array('short_facial', 'conditiontitle');
    }
}
