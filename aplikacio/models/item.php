<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	
	class Item extends CI_Model {

		function __construct() {
			parent::__construct();
		}
		
		function get_items() {
			$query = $this->db->get('item');
			return $query->result();
		}
		
		function get_item_tags() {
			
		
		}
		
	}