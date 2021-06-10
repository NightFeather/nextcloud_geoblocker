<?php

namespace OCA\GeoBlocker\Cron;

use OC\BackgroundJob\TimedJob;
use OCP\IConfig;
use OCP\ILogger;
use OCA\GeoBlocker\LocalizationServices\LocalizationServiceFactory;

class UpdaterJob extends TimedJob {
	/**
	 * @var IConfig
	 */
	private $config;

	/**
	 * @var ILogger
	 */
	private $logger;

	/**
	 * @var LocalizationServiceFactory
	 */
	private $factory;

	public function __construct(
		IConfig $config,
		ILogger $logger,
		LocalizationServiceFactory $factory
	) {
		$this->config = $config;
		$this->logger = $logger;
		$this->factory = $factory;
		// Every 30 days
		parent::setInterval(30 * 24 * 60 * 60);
	}

	/**
	 * @return void
	 */
	protected function run($argument) {
		// TODO: Only update, when activated.
		$this->logger->info('Starting the regular update of the database. This may take some time.',['GeoBlocker']);
		if ($this->factory->hasDatabaseUpdate()) {
			if ($this->factory->updateDatabase()) {
				$this->logger->info('Successfully updated the database.',['GeoBlocker']);
			} else {
				$this->logger->error('A Problem occured during the database update. Please check the settings page! The geoblocker service is maybe out of order.',['GeoBlocker']);
			}
		} else {
			$this->logger->warning('Regular database update is activated for a service, that have no update functionality. No action were done!',['GeoBlocker']);
		}
	}
}
