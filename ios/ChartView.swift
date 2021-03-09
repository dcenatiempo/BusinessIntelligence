import UIKit
import Charts
import TinyConstraints



class ChartView: UIView {

  override init(frame: CGRect) {
    super.init(frame: frame)
    self.addSubview(chart)
    chart.edgesToSuperview()

    setData()
  }

  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

  
  lazy var chart: BarChartView = {
    let _chart = BarChartView()
    
//    _chart.backgroundColor = .systemPink
    _chart.rightAxis.enabled = false
    _chart.legend.enabled = false

    
//    let defaultColor = rgbaToColor(array: fontColor) ?? .black
//    setDefaultColor(color: defaultColor)
    
    let xAxis = _chart.xAxis
    xAxis.labelFont = .boldSystemFont(ofSize: fontSize)
    xAxis.labelPosition = .bottom
    

    let yAxis = _chart.leftAxis
    yAxis.labelFont = .boldSystemFont(ofSize: fontSize)
//    yAxis.setLabelCount(6, force: false)

    _chart.drawValueAboveBarEnabled = false
    _chart.animate(xAxisDuration: 0.2, yAxisDuration: 0.5)
    
    return _chart
  }()
  
  func setData() {
    var newData: [CGFloat] = []
    if (data != nil) {
      newData = data!.map({ return $0 as! CGFloat});
    }
  
    var dataEntries: [BarChartDataEntry] = []

    for i in 0..<newData.count {
      let dataEntry = BarChartDataEntry(x: Double(i), y: Double(newData[i]))
      dataEntries.append(dataEntry)
    }

    let barChartDataSet = BarChartDataSet(entries: dataEntries, label: "Revenue")
//    let color = rgbaToColor(array: barColor)
    barChartDataSet.colors = getBarColors(values: newData)
    chart.data = BarChartData(dataSet: barChartDataSet)
    
    var newLabels: [String] = []
    if (labels != nil) {
      newLabels = labels!.map({ return $0 as! String});
    }
    chart.xAxis.valueFormatter = IndexAxisValueFormatter(values: newLabels)
    chart.xAxis.granularity = 1
  }
  
//  func setDefaultColor(color: NSUIColor) {
//    let xAxis = chart.xAxis
//    xAxis.labelTextColor = color
//    xAxis.gridColor = color
//
//    let yAxis = chart.leftAxis
//    yAxis.labelTextColor = color
//    yAxis.gridColor = color
//  }
  
  func getBarColors(values: [CGFloat]?) -> [NSUIColor] {

    var colors: [NSUIColor] = []

    let largest = values!.max() ?? 1
    let smallest = values!.min() ?? 0
    
    for i in 0..<values!.count {
      let percent = CGFloat((values![i] - smallest) / (largest - smallest));
      print(percent)
      var red: CGFloat
      var green: CGFloat = 0.8
      let blue: CGFloat = (0.99 - percent) / 3
  
      if (percent > 0.4) {
        red = 1 + (1 - (percent * 2))
      } else {
        red = 1.0
        green = percent * 5 / 3.5
        print (red, green)
      }

      let color = NSUIColor(red: red, green: green, blue: blue, alpha: 0.9)
      colors.append(color)
    }
    
    return colors
  }
  
  @objc var fontSize: CGFloat = 12 {
    didSet {
      let xAxis = chart.xAxis
      xAxis.labelFont = .boldSystemFont(ofSize: fontSize)

      let yAxis = chart.leftAxis
      yAxis.labelFont = .boldSystemFont(ofSize: fontSize)
    }
  }
  
//  @objc var fontColor: NSString? = "#000000" {
//    didSet {
//      let color = RCTConvert.uiColor("blue") ?? .black
//      setDefaultColor(color: color)
//    }
//  }
  
//  @objc var barColor: [CGFloat] = [] {
//    didSet {
//      setData(values: data)
//    }
//  }
  
  @objc var data: NSArray? {
    didSet {
      setData()
    }
  }
  
  @objc var labels: NSArray? {
    didSet {
      setData()
    }
  }
}
