// Copyright 2017-2022 Parity Technologies (UK) Ltd.
// This file is part of Polkadot.

// Polkadot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Polkadot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Polkadot.  If not, see <http://www.gnu.org/licenses/>.
//! Autogenerated weights for `frame_benchmarking::baseline`
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2022-03-15, STEPS: `50`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("kusama-dev"), DB CACHE: 1024

// Executed Command:
// ./target/production/polkadot
// benchmark
// --chain=kusama-dev
// --steps=50
// --repeat=20
// --pallet=frame_benchmarking::baseline
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --heap-pages=4096
// --header=./file_header.txt
// --output=./runtime/kusama/src/weights/frame_benchmarking_baseline.rs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::Weight};
use sp_std::marker::PhantomData;

/// Weight functions for `frame_benchmarking::baseline`.
pub struct WeightInfo<T>(PhantomData<T>);
impl<T: frame_system::Config> frame_benchmarking::baseline::WeightInfo for WeightInfo<T> {
	fn addition(_i: u32, ) -> Weight {
		(114_000 as Weight)
	}
	fn subtraction(_i: u32, ) -> Weight {
		(108_000 as Weight)
	}
	fn multiplication(_i: u32, ) -> Weight {
		(113_000 as Weight)
	}
	fn division(_i: u32, ) -> Weight {
		(111_000 as Weight)
	}
	fn hashing(_i: u32, ) -> Weight {
		(19_085_634_000 as Weight)
	}
	fn sr25519_verification(i: u32, ) -> Weight {
		(0 as Weight)
			// Standard Error: 14_000
			.saturating_add((47_267_000 as Weight).saturating_mul(i as Weight))
	}
	// Storage: Skipped Metadata (r:0 w:0)
	fn storage_read(i: u32, ) -> Weight {
		(0 as Weight)
			// Standard Error: 4_000
			.saturating_add((1_988_000 as Weight).saturating_mul(i as Weight))
			.saturating_add(T::DbWeight::get().reads((1 as Weight).saturating_mul(i as Weight)))
	}
	// Storage: Skipped Metadata (r:0 w:0)
	fn storage_write(i: u32, ) -> Weight {
		(0 as Weight)
			// Standard Error: 0
			.saturating_add((320_000 as Weight).saturating_mul(i as Weight))
			.saturating_add(T::DbWeight::get().writes((1 as Weight).saturating_mul(i as Weight)))
	}
}
