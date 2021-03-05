//
//  Chart.swift
//  BusinessIntelligence
//
//  Created by Devin B Cenatiempo on 3/5/21.
//

import Foundation
import UIKit

@objc(Chart)
class Chart: NSObject, RCTBridgeModule{
  
  static func moduleName() -> String! {
    return "Chart";
  }
  
  // if using UIKit
  static func requiresMainQueueSetup() -> Bool {
    return true;
  }

  // this is automatically run?
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["Hello": "World"]
  }
  
  private var count = 0

  // I need to explicitly expose this
  @objc
  func increment() {
    count += 1
    print("count is \(count)")
  }
}
