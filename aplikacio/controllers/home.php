<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
		$this->load->helper('url');
    }

	public function index()
	{
		$this->load->model('Item');
		
		// retrieve portfolio items
		$data['items'] = $this->Item->get_items();
		
		// current lang
		$data['current_lang'] = $this->lang->lang();
		
		$data['title'] = lang('title');
		$data['keywords'] = lang('keywords');
		$data['description'] = lang('description');
		
		$this->load->view('home_view',$data);
	}
}
