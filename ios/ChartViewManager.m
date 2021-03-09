#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(ChartViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(fontSize, CGFloat)
//RCT_EXPORT_VIEW_PROPERTY(fontColor, NSString?)
//RCT_EXPORT_VIEW_PROPERTY(barColor, NSString?)
RCT_EXPORT_VIEW_PROPERTY(data, NSArray?)
RCT_EXPORT_VIEW_PROPERTY(labels, NSArray?)

@end
