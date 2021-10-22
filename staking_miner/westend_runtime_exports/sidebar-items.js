initSidebarItems({"constant":[["BABE_GENESIS_EPOCH_CONFIG","The BABE epoch configuration at genesis."],["VERSION","Runtime version (Westend)."],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""]],"enum":[["BalancesCall","Contains one variant per dispatchable that can be called by an extrinsic."],["Call",""],["EPMCall","Contains one variant per dispatchable that can be called by an extrinsic."],["Event",""],["OriginCaller",""],["ProxyType","The type used to represent the kinds of proxying allowed."],["StakerStatus","Indicates the initial status of the staker."],["TimestampCall","Contains one variant per dispatchable that can be called by an extrinsic."]],"fn":[["native_version","Native version."]],"mod":[["api",""],["constants","Constant values used within the runtime."],["private",""]],"struct":[["Ancestry",""],["AnnouncementDepositBase",""],["AnnouncementDepositFactor",""],["BagThresholds",""],["BaseFilter","Allow everything."],["BasicDeposit",""],["BondingDuration",""],["CheckAccount",""],["ConfigDepositBase",""],["CooloffPeriod",""],["CrowdloanId",""],["DataDepositPerByte",""],["DepositBase",""],["DepositFactor",""],["EnactmentPeriod",""],["EndingPeriod",""],["EpochDuration",""],["ExistentialDeposit",""],["ExpectedBlockTime",""],["FastTrackVotingPeriod",""],["FieldDeposit",""],["FirstMessageFactorPercent",""],["FriendDepositFactor",""],["GenesisConfig",""],["ImOnlineUnsignedPriority",""],["IndexDeposit",""],["InstantAllowed",""],["LaunchPeriod",""],["LeasePeriod",""],["MaxAdditionalFields",""],["MaxAuthorities",""],["MaxFriends",""],["MaxInstructions",""],["MaxKeys",""],["MaxLocks",""],["MaxMemoLength",""],["MaxNominatorRewardedPerValidator",""],["MaxPeerDataEncodingSize",""],["MaxPeerInHeartbeats",""],["MaxPending",""],["MaxProxies",""],["MaxRegistrars",""],["MaxReserves",""],["MaxScheduledPerBlock",""],["MaxSignatories",""],["MaxSubAccounts",""],["MaximumSchedulerWeight",""],["MinContribution",""],["MinVestedTransfer",""],["MinimumDeposit",""],["MinimumPeriod",""],["NposCompactSolution16",""],["NposSolutionPriority",""],["OffchainRepeat",""],["OffendingValidatorsThreshold",""],["Offset",""],["OperationalFeeMultiplier","This value increases the priority of `Operational` transactions by adding a “virtual tip” that’s equal to the `OperationalFeeMultiplier * final_fee`."],["Origin","The runtime origin type represanting the origin of a call."],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["ParaDeposit",""],["Period",""],["PreimageByteDeposit",""],["ProxyDepositBase",""],["ProxyDepositFactor",""],["RecoveryDeposit",""],["RemoveKeysLimit",""],["ReportLongevity",""],["RewardCurve",""],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["SS58Prefix",""],["SampleLength",""],["SessionKeys",""],["SessionsPerEra",""],["SignedDepositBase",""],["SignedDepositByte",""],["SignedMaxSubmissions",""],["SignedPhase",""],["SignedRewardBase",""],["SlashDeferDuration",""],["SolutionImprovementThreshold",""],["SubAccountDeposit",""],["SubmissionDeposit",""],["TransactionByteFee",""],["UncleGenerations",""],["UnsignedPhase",""],["Version",""],["VoterSnapshotPerBlock","Whilst `UseNominatorsAndUpdateBagsList` or `UseNominatorsMap` is in use, this can still be a very large value. Once the `BagsList` is in full motion, staking might open its door to many more nominators, and this value should instead be what is a “safe” number (e.g. 22500)."],["VotingPeriod",""],["WestendForWestmint",""],["WestendNetwork",""],["Westmint",""],["WndLocation",""],["XcmConfig",""]],"trait":[["BuildStorage","Complex storage builder stuff."]],"type":[["Address","The address format for describing accounts."],["AllModules","All modules included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllModulesWithSystem","All modules included in the runtime as a nested tuple of types."],["AllPallets","All pallets included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllPalletsWithSystem","All pallets included in the runtime as a nested tuple of types."],["Auctions",""],["AuthorityDiscovery",""],["AuthorityDiscoveryConfig",""],["Authorship",""],["Babe",""],["BabeConfig",""],["BagsList",""],["Balances",""],["BalancesConfig",""],["Barrier","The barriers one of which must be passed for an XCM message to be executed."],["Block","Block type as expected by this runtime."],["BlockId","`BlockId` type as expected by this runtime."],["Configuration",""],["ConfigurationConfig",""],["Crowdloan",""],["Dmp",""],["ElectionProviderMultiPhase",""],["Executive","Executive: handles dispatch to the various modules."],["Grandpa",""],["GrandpaConfig",""],["Header","Block header type as expected by this runtime."],["Historical",""],["Hrmp",""],["Identity",""],["ImOnline",""],["ImOnlineConfig",""],["Indices",""],["IndicesConfig",""],["Initializer",""],["LocalAssetTransactor",""],["LocalOriginToLocation","Type to convert an `Origin` type value into a `MultiLocation` value which represents an interior location of this chain."],["LocationConverter",""],["Multisig",""],["Offences",""],["ParaInclusion",""],["ParaInherent",""],["ParaScheduler",""],["ParaSessionInfo",""],["ParachainsOrigin",""],["Paras",""],["ParasConfig",""],["ParasShared",""],["ParasSudoWrapper",""],["Proxy",""],["Recovery",""],["Registrar",""],["RegistrarConfig",""],["Scheduler",""],["Session",""],["SessionConfig",""],["SignedBlock","A Block signed with a Justification"],["SignedExtra","The `SignedExtension` to the basic transaction logic."],["SignedPayload","The payload being signed in transactions."],["Slots",""],["Staking",""],["StakingConfig",""],["Sudo",""],["SudoConfig",""],["System",""],["SystemConfig",""],["Timestamp",""],["TransactionPayment",""],["TrustedTeleporters",""],["Ump",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."],["Utility",""],["Vesting",""],["VestingConfig",""],["XcmPallet",""],["XcmPalletConfig",""],["XcmRouter","The XCM router. When we want to send an XCM message, we use this type. It amalgamates all of our individual routers."]]});