import Foundation

@objc(ChartViewManager)
class ChartViewManager: RCTViewManager {
  override func view() -> UIView! {
    return ChartView()
  }
  
  // this is required since RN 0.49+
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }

}
