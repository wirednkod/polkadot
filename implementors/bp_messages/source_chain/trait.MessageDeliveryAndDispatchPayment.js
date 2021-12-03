(function() {var implementors = {};
implementors["bp_messages"] = [];
implementors["pallet_bridge_messages"] = [{"text":"impl&lt;T, I, Currency, GetConfirmationFee, RootAccount&gt; <a class=\"trait\" href=\"bp_messages/source_chain/trait.MessageDeliveryAndDispatchPayment.html\" title=\"trait bp_messages::source_chain::MessageDeliveryAndDispatchPayment\">MessageDeliveryAndDispatchPayment</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"type\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>, &lt;Currency as <a class=\"trait\" href=\"frame_support/traits/tokens/currency/trait.Currency.html\" title=\"trait frame_support::traits::tokens::currency::Currency\">Currency</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"type\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"type\" href=\"frame_support/traits/tokens/currency/trait.Currency.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::currency::Currency::Balance\">Balance</a>&gt; for <a class=\"struct\" href=\"pallet_bridge_messages/instant_payments/struct.InstantCurrencyPayments.html\" title=\"struct pallet_bridge_messages::instant_payments::InstantCurrencyPayments\">InstantCurrencyPayments</a>&lt;T, I, Currency, GetConfirmationFee, RootAccount&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"pallet_bridge_messages/pallet/trait.Config.html\" title=\"trait pallet_bridge_messages::pallet::Config\">Config</a>&lt;I&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Currency: <a class=\"trait\" href=\"frame_support/traits/tokens/currency/trait.Currency.html\" title=\"trait frame_support::traits::tokens::currency::Currency\">CurrencyT</a>&lt;T::<a class=\"type\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>, Balance = T::<a class=\"type\" href=\"pallet_bridge_messages/pallet/trait.Config.html#associatedtype.OutboundMessageFee\" title=\"type pallet_bridge_messages::pallet::Config::OutboundMessageFee\">OutboundMessageFee</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Currency::<a class=\"type\" href=\"frame_support/traits/tokens/currency/trait.Currency.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::currency::Currency::Balance\">Balance</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"type\" href=\"bp_messages/type.MessageNonce.html\" title=\"type bp_messages::MessageNonce\">MessageNonce</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;GetConfirmationFee: <a class=\"trait\" href=\"frame_support/traits/misc/trait.Get.html\" title=\"trait frame_support::traits::misc::Get\">Get</a>&lt;Currency::<a class=\"type\" href=\"frame_support/traits/tokens/currency/trait.Currency.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::currency::Currency::Balance\">Balance</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;RootAccount: <a class=\"trait\" href=\"frame_support/traits/misc/trait.Get.html\" title=\"trait frame_support::traits::misc::Get\">Get</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.56.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T::<a class=\"type\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["pallet_bridge_messages::instant_payments::InstantCurrencyPayments"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()