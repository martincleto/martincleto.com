<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Lang_switcher
 *
 * Show a switcher with alternative languages
 *
 * @access	public
 * @param	string	the current language
 * @return	string
 */
 
function lang_switcher($current_lang){
	return "the current langauge is" . $current_lang;
}

// ------------------------------------------------------------------------
/* End of file language_helper.php */
/* Location: ./system/helpers/language_helper.php */