<?php
/**
 * Facial condition.
 *
 * @package    availability_facial
 * @author     Eduardo Kraus
 * @license    http://www.eduardokraus.com
 */

namespace availability_facial;

defined('MOODLE_INTERNAL') || die();

class condition extends \core_availability\condition {
    public function save() {
        return (object)array('type' => 'facial', 'd' => $this->facialfromstart);
    }

    public function is_available($not, \core_availability\info $info, $grabthelot, $userid) {
        return $this->is_available_for_all($not);
    }

    public function is_available_for_all($not = false) {
        return true;
    }

    public function get_description($full, $not, \core_availability\info $info) {
        return $this->get_either_description($not, false);
    }

    public function get_standalone_description($full, $not, \core_availability\info $info) {
        return $this->get_either_description($not, true);
    }

    protected function get_either_description($not, $standalone) {
        $satag = $standalone ? 'short_' : 'full_';
        $desc = get_string($satag . 'facial', 'availability_facial');

        return $desc;
    }

    protected function get_debug_string() {
        return $this->facialfromstart;
    }

    public function update_after_restore($restoreid, $courseid, \base_logger $logger, $name) {
        return true;
    }
}
