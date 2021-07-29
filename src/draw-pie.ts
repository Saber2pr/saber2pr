import { collect, TextTree } from './tree';

export const createPieOps = (data: any) => {
  const ds = collect(data)

  const map: { [title: string]: TextTree } = {}
  let sum = 0
  const pieData = ds.reduce((acc, item) => {
    map[item.title] = item
    if (item.children) {
      return acc.concat({
        name: item.title,
        value: item.children.length,
      })
    } else {
      sum++
    }
    return acc
  }, [])

  return {
    title: {
      text: `${sum}篇`,
      textStyle: {
        fontSize: 20,
        color: '#747474',
      },
      textAlign: 'center',
      textVerticalAlign: 'center',
      left: '50%',
      top: '50%',
    },
    tooltip: {
      trigger: 'item',
      formatter(params: any) {
        params = params[0] || params
        return params.marker + params.name + '<br/>' + params.value + ' 篇'
      },
    },
    grid: {
      bottom: 100,
      top: 100,
      left: 100,
      right: 100,
    },
    series: [
      {
        type: 'pie',
        roseType: 'radius',
        radius: ['20%', '40%'],
        label: {
          textBorderColor: 'transparent',
          color: '#747474',
        },
        itemStyle: {
          borderRadius: 4,
          borderWidth: 2,
        },
        data: pieData,
      },
    ],
  }
}