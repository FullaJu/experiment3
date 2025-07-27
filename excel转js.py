import pandas as pd
import json

# 读取Excel文件
df = pd.read_excel('all_faces.xlsx')

# 转换为JSON格式
faces_data = df.to_dict('records')  # 转换为记录列表格式

# 保存为JSON文件
with open('all_faces.json', 'w', encoding='utf-8') as f:
    json.dump(faces_data, f, ensure_ascii=False, indent=2)

print("转换完成！")
print(f"总共有 {len(faces_data)} 条面孔数据")

# 查看前几条数据的结构
print("\n前3条数据示例：")
for i, face in enumerate(faces_data[:3]):
    print(f"第{i+1}条: {face}")