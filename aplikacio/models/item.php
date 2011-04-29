<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	
	class Item extends CI_Model {

		function __construct() {
			parent::__construct();
		}
		
		function get_items() {
			$query = $this->db->get('item');
			return $query->result();
		}
		
		function get_item_tags($item_id) {
			$result =  NULL;
			if($item_id){
				$query = $this->db->query('SELECT name FROM tag INNER JOIN item_tag ON tag.id = item_tag.tag_id WHERE item_tag.item_id = 1');
				$result = $query->result();
			}
			return $result;
		}
		
	}