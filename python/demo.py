# 注释
'''
三个单引号多行注释
'''
"""
三个双引号多行注释
"""

#输出语句 单引号
#print('Hello World')

#输出语句 双引号
#print("Hello World")

#如果是多行  必须使用 """,加r就会输出一切
# print(r"""hello,\n\n\n\n\n
# world!""")

#当代码以 ： 结尾时，缩进的语句视为代码块，使用4个空格，注意大小写，
# a = 100
# if a > 10:
#     print(a)
# else:
#     print(-a)
# elif === else if
# if <条件判断1>:
#     <执行1>
# elif <条件判断2>:
#     <执行2>
# elif <条件判断3>:
#     <执行3>
# else:
#     <执行4>

#布尔值，and表示 && ，or表示 || ，not是一个单目运算符，把true变为false，false变为true

#python里的空值用 None 表示，不能理解为0

#list【
#classlist = ["joke","ros","uc"]  #list类型
# print(len(classlist)) #使用len()获取长度
# print(classlist[0]) #同样是从0位开始计算
# print(len(classlist)-1) #最后一位
# print(classlist[-1]) #可以用-1直接获取最后一位，以此类推可以倒推
# print(classlist.append('alex'))  #往最后一位加入
# print(classlist.insert(1,"jack")) #指定位置添加
# print(classlist)

#tuple 不可被改变，没有增删改查
# tuple = (1,) #定义一个时，必须在后面加 " , "
# print(tuple)

#定义一个函数 def
# def my_Fun(x):
#     if x >= 10:
#         return x
#     else:
#         return -x
# print(my_Fun(9))